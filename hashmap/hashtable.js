class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  get(key) {
    const hashKey = this._hash(key);
    const currentBucket = this.data[hashKey];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) return currentBucket[i][1];
      }
    }
  }

  set(key, value) {
    const hashKey = this._hash(key);
    if (!this.data[hashKey]) {
      this.data[hashKey] = [];
    }
    this.data[hashKey].push([key, value]);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
}

const myHashTable = new HashTable(2);
myHashTable.set("grapes", 10000);
console.log(myHashTable.get("grapes"));
myHashTable.set("apples", 9);
console.log(myHashTable.get("apples"));
console.log(myHashTable.data);
