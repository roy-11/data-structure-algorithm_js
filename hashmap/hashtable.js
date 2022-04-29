class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  get(key) {
    const hashKey = this._hash(key);
    const bucketsArray = this.data[hashKey];
    if (bucketsArray) {
      for (let i = 0; i < bucketsArray.length; i++) {
        if (bucketsArray[i][0] === key) return bucketsArray[i][1];
      }
    }
  }

  set(key, value) {
    const index = this._hash(key);
    if (!this.data[index]) {
      this.data[index] = [];
    }
    this.data[index].push([key, value]);
  }

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      const bucketsArray = this.data[i];

      if (bucketsArray) {
        if (bucketsArray.length < 2) {
          keysArray.push(bucketsArray[0][0]);
        } else {
          for (let j = 0; j < bucketsArray.length; j++) {
            keysArray.push(bucketsArray[j][0]);
          }
        }
      }
    }
    return keysArray;
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
}

const myHashTable = new HashTable(10);
myHashTable.set("grapes", 10000);
console.log(myHashTable.get("grapes"));
myHashTable.set("apples", 9);
console.log(myHashTable.get("apples"));
myHashTable.set("orange", 54);
myHashTable.set("orange", 54);
console.log(myHashTable.get("orange"));
console.log(myHashTable.data);
console.log(myHashTable.keys());
