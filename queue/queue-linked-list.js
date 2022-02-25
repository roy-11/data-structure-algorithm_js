class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    console.log(this.first);
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;
    return this;
  }

  dequeue() {
    this.first = this.first.next;
    if (this.first === null) this.last === null;
    this.length--;
    return this;
  }
}

const myQueue = new Queue();

console.log(myQueue);
myQueue.peek();
myQueue.enqueue("Joy");
myQueue.peek();
myQueue.enqueue("Matt");
myQueue.peek();
myQueue.enqueue("Pavel");
myQueue.peek();
myQueue.enqueue("Samir");
myQueue.peek();
console.log(myQueue);
myQueue.peek();
myQueue.dequeue();
myQueue.peek();
myQueue.dequeue();
myQueue.peek();
myQueue.dequeue();
myQueue.peek();
myQueue.dequeue();
myQueue.peek();
