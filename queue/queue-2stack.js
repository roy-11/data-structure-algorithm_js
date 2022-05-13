class CrazyQueue {
  constructor() {
    this.first = []; // 逆順のstack
    this.last = []; // 通常のstack
  }

  // 通常順にpushする
  enqueue(value) {
    // firstがある場合、通常順のlastがないのでfirstをpopすることで、通常stack順にする
    const length = this.first.length;
    for (let i = 0; i < length; i++) {
      this.last.push(this.first.pop());
    }

    this.last.push(value); // 通常のstackにpushする
    return this;
  }

  // dequeueする時にのみ逆順が分かれば良い
  // 逆順からpopする
  dequeue() {
    // lastがある場合は、逆順のfirstがないので通常順のlastをpopすることで、逆順にする
    const length = this.last.length;
    for (let i = 0; i < length; i++) {
      this.first.push(this.last.pop());
    }

    this.first.pop(); // 逆順のstackからpopする
    return this;
  }

  peek() {
    // lastがある場合、lastは通常stackなので最初の要素が先頭
    if (this.last.length > 0) {
      return this.last[0];
    }

    // firstがある場合、firstは逆順なので最後の要素が先頭
    return this.first[this.first.length - 1];
  }
}

const myQueue = new CrazyQueue();
console.log(myQueue.peek());
console.log(myQueue.enqueue("Joy"));
console.log(myQueue.peek());
console.log(myQueue.enqueue("Matt"));
console.log(myQueue.peek());
console.log(myQueue.enqueue("Pavel"));
console.log(myQueue.peek());
console.log(myQueue.dequeue());
console.log(myQueue.peek());
console.log(myQueue.dequeue());
console.log(myQueue.peek());
console.log(myQueue.enqueue("John"));
console.log(myQueue.peek());
console.log(myQueue.dequeue());
console.log(myQueue.peek());
