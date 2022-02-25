class Stack {
  constructor() {
    this.data = new Array();
    this.top = null;
    this.bottom = null;
  }
  peek() {
    console.log(this.top);
    return this.top;
  }
  push(value) {
    this.data.push(value);
    this.top = this.data[this.data.length - 1] || null;
    this.bottom = this.data[0] || null;
    return this.data;
  }
  pop() {
    this.data.pop();
    this.top = this.data[this.data.length - 1] || null;
    this.bottom = this.data[0] || null;
    return this.data;
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
