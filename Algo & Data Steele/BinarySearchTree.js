// * Trees are heavily used in nultiple technologies
// *** HTML DOM || Network Routing || Abstract Syntax Tree || Artificial Intelligence
// * Computer File System || JSON  
// * Kinds of Trees
// * Trees
// * Binary Search Tree
class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (this.root === null){
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while(true) {
        if(value === current.value) return console.log('Already in the tree');
        if(value < current.value) {
          if(current.left === null){
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null){
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  contains(value) {
    if (this.root === null) return console.log("tree is empty for now!");
    let current = this.root,
        found = false;
    while(!found && current){
      if(value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;        
      }
    }
    if (!found) return console.log(`The element of ${value} is not presented in the Tree`);
    if (found) return console.log(`The element ${value} was found`);
  }
    // *** Depth-First Traversal of BST
    BFS() {
      let data = [],
          node = this.root,
          queue = [];
      queue.push(this.root);
      while(queue.length){
        node = queue.shift();
        data.push(node);
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
      }
      return data;
    }
    DFSPreOrder() {
      let store = [],
          current = this.root;
      function traverse(node) {
        store.push(node.value);
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
      }
      traverse(current);
      return store;
    }
    DFSPostOrder() {
      let data = [];
      function traverse(node){
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
        data.push(node.value);
      }
      traverse(this.root);
      return data;
    }
    DFSInOrder() {
      let data = [];
      function traverse(node){
        node.left && traverse(node.left);
        data.push(node.value);
        node.right && traverse(node.right);
      }
      traverse(this.root);
      return data;
    }
}

// *         10
// *     5       15
// *   2   8   12  18

export let tree = new BinarySearchTree();

tree.root = new Node(10);
tree.insert(5);
tree.insert(15);
tree.insert(2);
tree.insert(8);
tree.insert(12);
tree.insert(18);
// tree.contains(18);

// let depthTraversalPre = tree.DFSPreOrder();
// let depthTraversalPost = tree.DFSPostOrder();
// let depthTraversalInOrder = tree.DFSInOrder();
// console.log(depthTraversalPost, 'PostOrder');
// console.log(depthTraversalPre, "PreOrder");
// console.log(depthTraversalInOrder, "InOrder");

