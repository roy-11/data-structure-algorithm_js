class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  prepend(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
  }

  append(value) {
    const node = new Node(value);
    this.tail.next = node;
    this.tail = node;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index, value) {
    if (typeof index !== "number") return "not number";
    if (!Number.isInteger(index)) return "not integer";
    if (Math.sign(index) === -1) return "not positive";
    if (index > this.length) return "index not exists";
    if (index === this.length) return this.append(value);
    if (index === 0) return this.prepend(value);

    const leaderNode = this.traverseToIndex(index - 1);
    const followerNode = leaderNode.next;

    const node = new Node(value);
    node.next = followerNode;
    leaderNode.next = node;
    this.length++;
    return this;
  }

  remove(index) {
    const leaderNode = this.traverseToIndex(index - 1);
    const unwantedNode = leaderNode.next;
    const unwantedNextNode = unwantedNode.next;

    leaderNode.next = unwantedNextNode;
    this.length--;
    return this;
  }

  traverseToIndex(index) {
    let count = 0;
    let targetNode = this.head;
    while (count < index) {
      targetNode = targetNode.next;
      count++;
    }
    return targetNode;
  }

  reverse() {
    let currentNode = this.head;
    let rNewNode = null;
    let rPrevNode = null;

    while (currentNode !== null) {
      // 一個前ループ処理したノードが存在するかどうか
      if (rPrevNode) {
        rNewNode = new Node(currentNode.value); // 現在ループ処理中のノードを新しいノードとして複製
        rNewNode.next = rPrevNode; // 新しいノードのnextに前回ループ処理したノードを保管
        rPrevNode = rNewNode; // 前回ループ処理のノードを現在ループ処理中のノードに入れ替える
      } else {
        // 存在しない場合、次回のループ用にノードを記録する
        // またその場合初回ループ時のノードは一番後ろのノードになるためtailに保管
        rPrevNode = new Node(currentNode.value);
        this.tail = rPrevNode;
      }

      // loop
      currentNode = currentNode.next;
    }

    this.head = rNewNode;
    return this;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  prepend(value) {
    // make new Node
    const node = new Node(value);
    node.next = this.head;

    // change head's prev
    this.head.prev = node;

    // set Linked List
    this.head = node;

    this.length++;
    return this;
  }

  append(value) {
    // make new Node
    const node = new Node(value);
    node.prev = this.tail;

    // change tail's next
    this.tail.next = node;

    // set Linked List
    this.tail = node;

    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index, value) {
    if (typeof index !== "number") return "not number";
    if (!Number.isInteger(index)) return "not integer";
    if (Math.sign(index) === -1) return "not positive";
    if (index > this.length) return "index not exists";
    if (index === this.length) return this.append(value);
    if (index === 0) return this.prepend(value);

    // get leaderNode Reference
    const leaderNode = this.traverseToIndex(index - 1);
    const followerNode = leaderNode.next;

    // make new Node
    const node = new Node(value);
    node.next = followerNode;
    node.prev = leaderNode;

    // change original leaderNode.next's prev
    followerNode.prev = node;

    // change leaderNode's next
    leaderNode.next = node;

    this.length++;
    return this;
  }

  remove(index) {
    // get leaderNode Reference
    const leaderNode = this.traverseToIndex(index - 1);
    const unwantedNode = leaderNode.next;
    const unwantedNextNode = unwantedNode.next;

    // change leaderNode's next
    leaderNode.next = unwantedNextNode;

    // change unwantedNextNode's prev
    unwantedNextNode.prev = leaderNode;

    this.length--;
    return this;
  }

  traverseToIndex(index) {
    let count = 0;
    let targetNode = this.head;
    while (count < index) {
      targetNode = targetNode.next;
      count++;
    }
    return targetNode;
  }

  reverse() {}
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class DoublyNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

const MyLinkedList = new LinkedList(10);
MyLinkedList.append(5);
MyLinkedList.append(16);
MyLinkedList.prepend(1);
MyLinkedList.prepend(2);
console.log(MyLinkedList.printList());
MyLinkedList.insert(5, 999);
MyLinkedList.insert(100, 999);
MyLinkedList.insert(0, 99);
console.log(MyLinkedList.printList());
MyLinkedList.remove(2);
console.log(MyLinkedList.printList());
MyLinkedList.reverse();
console.log(MyLinkedList.printList());
