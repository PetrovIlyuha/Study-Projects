// class MaxBinaryHeap {
//   constructor() {
//     this.values = [45,65,35,14,21,11];
//   }
//   insert(element){
//     this.values.push(element);
//     this.bubbleUp();
//   }
//   bubbleUp(){
//     let index = this.values.length - 1;
//     const element = this.values[index];
//     while(index > 0){
//       let parentIndex = Math.floor((index - 1)/2);
//       let parent = this.values[parentIndex];
//       if (element <= parent) break;
//       this.values[parentIndex] = element;
//       this.values[index] = parent;
//       index = parentIndex;
//     }
//   }
//   extractMax() {
//     const max = this.values[0];
//     const end = this.values.pop();
//     if (this.values.length > 0) {
//       this.values[0] = end;
//       // Percolate down
//       this.sinkDown();      
//     }
//     return console.log(max);
//   }
//   sinkDown(){
//     let index = 0;
//     const length = this.values.length;
//     const element = this.values[0];
//     while(true){
//       let leftChildIndex = 2*index + 1;
//       let rightChildIndex = 2*index + 2;
//       let leftChild, rightChild;
//       let swap = null;
//       if(leftChildIndex < length){
//         leftChild = this.values[leftChildIndex];
//         if (leftChild > element) {
//           swap = leftChildIndex;
//         }
//       }
//       if (rightChildIndex < length){
//         rightChild = this.values[rightChildIndex];
//         if ((swap === null && rightChild > element) || 
//            (swap !== null && rightChild > leftChild)) {
//           swap = rightChildIndex;
//         }
//       }
//       if(swap === null) break;
//       this.values[index] = this.values[swap];
//       this.values[swap] = element;
//       index = swap;
//     }
//   }
// }

// let heap = new MaxBinaryHeap();
// heap.insert(55);
// heap.insert(1);
// heap.insert(600);
// console.log(heap.values);
// heap.extractMax();
// console.log(heap.values);
// heap.extractMax();
// console.log(heap.values);
// heap.extractMax();
// console.log(heap.values);


// *** Priority Queue
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority){
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp(){
    let index = this.values.length - 1;
    const element = this.values[index];
    while(index > 0){
      let parentIndex = Math.floor((index - 1)/2);
      let parent = this.values[parentIndex];
      if (element.priority >= parent.priority) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      // Percolate down
      this.sinkDown();      
    }
    return console.log(min);
  }
  sinkDown(){
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];
    while(true){
      let leftChildIndex = 2*index + 1;
      let rightChildIndex = 2*index + 2;
      let leftChild, rightChild;
      let swap = null;
      if(leftChildIndex < length){
        leftChild = this.values[leftChildIndex];
        if (leftChild.priority < element.priority) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length){
        rightChild = this.values[rightChildIndex];
        if ((swap === null && rightChild.priority < element.priority) || 
           (swap !== null && rightChild.priority < leftChild.priority)) {
          swap = rightChildIndex;
        }
      }
      if(swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

let ER = new PriorityQueue();
ER.enqueue("common cold", 1);
ER.enqueue("gunshot wound", 5);
ER.enqueue("high fever", 2);
ER.enqueue("itching", 10);
ER.enqueue("rashes", 7);
console.log(ER);
ER.dequeue();
ER.dequeue();
ER.dequeue();
ER.dequeue();
ER.dequeue();

//  *** Binary Heap Big O notation
