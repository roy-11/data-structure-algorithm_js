class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    console.log(this.top);
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.bottom) this.bottom = newNode;
    if (this.top) newNode.next = this.top;
    this.top = newNode;
    this.length++;
    return this;
  }

  pop() {
    this.top = this.top.next;
    this.length--;

    if (!this.top) this.bottom = null;
    return this;
  }
  //isEmpty
}

const myStack = new Stack();
console.log(myStack);
myStack.push("Discord");
myStack.peek();
myStack.push("Udemy");
myStack.peek();
myStack.push("google");
myStack.peek();
console.log(myStack);
myStack.pop();
myStack.peek();
myStack.pop();
myStack.peek();
myStack.pop();
myStack.peek();
console.log(myStack);

//Discord
//Udemy
//google
