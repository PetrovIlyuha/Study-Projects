
// ? Array implementation with Stack Structure
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(value) {
    let newNode = new Node(value);
    if (!this.first){
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  pop() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.first = null;
      this.last = null;
      this.size--;
      return temp.value;
    } else {
      this.first = temp.next;
      this.size--;
      return temp.value;
    }
  }
}

export const stack = new Stack();

// FIXME: Big O of Stacks
// Insertion - O(1)
// Removal - O(1)
// Searching - O(N)
// Access - O(N)

// ? Queues
// * Queue is DS where you can only add and remove but FIFO method is implied
// * Use when *** Background Tasks or Uploading resources or Printing/Task processing
class NodeQueue {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(value) {
    const newNode = new NodeQueue(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  } 

  dequeue() {
    if (!this.first) return null;
    const temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

export const queue = new Queue();

// * Queue (Big O) Notation
// *  insertion - O(1)
// * Removal - O(1)
// * Searching - O(N)
// *  Access - O(N)