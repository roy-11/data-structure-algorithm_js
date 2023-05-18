const shiftItems = Symbol();

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    if (index === this.length - 1) return this.pop();

    const deletedItem = this.data[index];
    delete this.data[index];
    this[shiftItems](index);
    this.length--;
    return deletedItem;
  }

  // private method
  [shiftItems](index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
  }
}

const newArray = new MyArray();
console.log(newArray);
console.log(newArray.get(0));
console.log(newArray.push("test1"));
console.log(newArray.push("test2"));
console.log(newArray.get(0));
console.log(newArray.get(1));
console.log(newArray);
console.log(newArray.pop());
console.log(newArray);
console.log(newArray.push("test2"));
console.log(newArray.push("test3"));
console.log(newArray.push("test4"));
console.log(newArray);
console.log(newArray.delete(2));
console.log(newArray);
console.log(newArray.delete(2));
console.log(newArray);
