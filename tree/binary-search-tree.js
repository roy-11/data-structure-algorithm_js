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
  remove(value) {
    if (!this.root) return false;

    let removeNode = this.root;
    let parentNode = null;
    let targetExist = false;

    while (removeNode) {
      if (value < removeNode.value) {
        parentNode = removeNode;
        removeNode = removeNode.left;
      } else if (value > removeNode.value) {
        parentNode = removeNode;
        removeNode = removeNode.right;
      } else if (removeNode.value === value) {
        targetExist = true;
        break;
      }
    }

    if (targetExist) {
      // Option 1
      // 削除するノードが右の子ノードを持たないケース
      if (removeNode.right === null) {
        // 削除するノードがrootノードだった場合には（右がnullなので）左を繰り上げる
        if (parentNode === null) {
          this.root = removeNode.left;
          return;
        }

        // 削除するノードが親から見て左の子ノードだった場合には、親の左にデータを入れる（同じ位置に繰り上げ）
        if (removeNode.value < parentNode.value) {
          parentNode.left = removeNode.left;
          return;
        }

        // 削除するノードが親から見て右の子ノードだった場合には、親の右にデータを入れる（同じ位置に繰り上げ）
        if (removeNode.value > parentNode.value) {
          parentNode.right = removeNode.left;
          return;
        }
      }

      // Option 2
      // 削除するノードの右の子ノードが左に子ノードを持たないケース
      if (removeNode.right.left === null) {
        // 削除するノードの左側データを、右の子ノードの左に移す
        removeNode.right.left = removeNode.left;

        // 削除するノードがrootノードだった場合には右を繰り上げる（左側の全て右に移してあるので可能）
        if (parentNode === null) {
          this.root = removeNode.right;
          return;
        }

        // 削除するノードが親から見て左の子ノードだった場合には、親の左にデータを入れる（同じ位置に繰り上げ）
        if (removeNode.value < parentNode.value) {
          parentNode.left = removeNode.right;
          return;
        }

        // 削除するノードが親から見て右の子ノードだった場合には、親の右にデータを入れる（同じ位置に繰り上げ）
        if (removeNode.value > parentNode.value) {
          parentNode.right = removeNode.right;
          return;
        }
      }

      // Option 3
      // 削除するノードの右の子ノードが左に子ノードを持つケース
      if (removeNode.right.left) {
        // 右の子ノード以降で最も左にあるノードを探す（つまり、削除するノードよりも値が大きいが最も小さい値）
        let leftMostParent = removeNode.right;
        let leftMost = leftMostParent.left;

        while (leftMost.left !== null) {
          leftMostParent = leftMost;
          leftMost = leftMost.left;
        }

        // 最も左のノードがその親の左に、右の子ノードを渡しておく
        // （最も左なので左の子ノードはないため右のみ渡す）
        leftMostParent.left = leftMost.right;

        // 削除するノードの右と左をその最も左のノードに付け替える
        leftMost.left = removeNode.left;
        leftMost.right = removeNode.right;

        // 削除するノードがrootノードだった場合には最も左のノードを入れる(削除するrootノードの子は付け替え済み)
        if (parentNode === null) {
          this.root = leftMost;
          return;
        }

        // 削除するノードが親から見て左の子ノードだった場合には、親の左にデータを入れる（同じ位置に繰り上げ）
        if (removeNode.value < parentNode.value) {
          parentNode.left = leftMost;
          return;
        }

        // 削除するノードが親から見て右の子ノードだった場合には、親の右にデータを入れる（同じ位置に繰り上げ）
        if (removeNode.value > parentNode.value) {
          parentNode.right = leftMost;
          return;
        }
      }
    }
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
tree.remove(9);
console.log(tree.breadthFirstSearch());
tree.insert(17);
console.log(tree.breadthFirstSearch());
//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
