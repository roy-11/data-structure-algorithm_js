class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;
    while (true) {
      if (newNode.value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }

        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }

        currentNode = currentNode.right;
      }
    }
  }
  lookup(value) {
    if (!this.root) {
      return null;
    }

    let currentNode = this.root;
    while (currentNode) {
      if (value === currentNode.value) return currentNode;
      if (value < currentNode.value) currentNode = currentNode.left;
      if (value > currentNode.value) currentNode = currentNode.right;
    }

    return null;
  }
  breadthFirstSearch() {
    let currentNode = this.root;
    const queue = [];
    const valueList = [];

    queue.push(currentNode);

    while (queue.length > 0) {
      currentNode = queue.shift();
      valueList.push(currentNode.value);

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    return valueList;
  }
  breadthFirstSearchR(queue, valueList) {
    if (!queue.length) return valueList;
    let currentNode = queue.shift();
    valueList.push(currentNode.value);

    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);

    return this.breadthFirstSearchR(queue, valueList);
  }
  DFSInorder() {
    return traverseInOrder(this.root, []);
  }
  DFSPreorder() {
    return traversePreOrder(this.root, []);
  }
  DFSPostorder() {
    return traversePostOrder(this.root, []);
  }
}

function traverseInOrder(node, list) {
  if (node.left) traverseInOrder(node.left, list);
  list.push(node.value);
  if (node.right) traverseInOrder(node.right, list);
  return list;
}

function traversePreOrder(node, list) {
  list.push(node.value);
  if (node.left) traversePreOrder(node.left, list);
  if (node.right) traversePreOrder(node.right, list);
  return list;
}

function traversePostOrder(node, list) {
  if (node.left) traversePostOrder(node.left, list);
  if (node.right) traversePostOrder(node.right, list);
  list.push(node.value);
  return list;
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(JSON.stringify(traverse(tree.root)));
console.log(tree.lookup(9));
console.log(tree.lookup(4));
console.log(tree.lookup(6));
console.log(tree.lookup(20));
console.log(tree.lookup(170));
console.log(tree.lookup(15));
console.log(tree.lookup(1));
console.log(tree.lookup(171));
console.log(tree.breadthFirstSearch());
console.log(tree.breadthFirstSearchR([tree.root], []));
console.log(tree.DFSInorder());
console.log(tree.DFSPreorder());
console.log(tree.DFSPostorder());
//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
