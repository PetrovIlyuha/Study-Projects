export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export class DoublyLinkedList { 
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      oldHead.next = null;
      this.head.prev = null;
    }
    this.length--;
    return oldHead;
  }
  unshift(value) {
    let newNode = new Node(value)
    if (this.length === 0) {
      this.head === newNode;
      this.tail === newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index <= this.length/2) {
      console.log("Find from beginning");
      let count = 0;
      let current = this.head;
      while (count != index) {
        current = current.next;
        count++;
        }
        console.log(current);
        return current;
      } else {
      console.log('Find from tail');
      let count = this.length - 1;
      let current = this.tail;
      while (count != index) {
        current = current.prev;
        count--;
        }
        console.log(current)
        return current;
      }
  }
  set(index, value) {
    let foundNode = this.get(index);
    if (foundNode != null) {
      foundNode.value = value;
      return true;
    }
    return false;
  }
  insert(index,value) {
    if (index < 0 || index > this.length) {
      return 'You have given out of range index for the element!';
    } else if (index === 0) {
      return this.unshift(value);
    } else if (index === this.length) {
      return this.push(value);
    } else {
      let newNode = new Node(value);
      let beforeNode = this.get(index-1);
      let afterNode = beforeNode.next;

      beforeNode.next = newNode, newNode.prev = beforeNode;
      newNode.next = afterNode, afterNode.prev = newNode;
      this.length++;
      return true;
    }
  }
  remove(index) {
    if (index < 0 || index >= this.length) return 'Wrong Index';
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let foundNode = this.get(index);
    
    foundNode.prev.next = foundNode.next;
    foundNode.next.prev = foundNode.prev;
    foundNode.prev = null;
    foundNode.next = null;
    this.length--;
    console.log(foundNode);
    return foundNode;
  }
}


