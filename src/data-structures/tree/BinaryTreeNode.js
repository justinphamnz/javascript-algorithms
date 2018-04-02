export default class BinaryTreeNode {
  constructor(value = null, left = null, right = null) {
    this.left = left;
    this.right = right;
    this.value = value;
  }

  addLeft(node) {
    this.left = node;
    return this;
  }

  addRight(node) {
    this.right = node;
    return this;
  }

  traverseInOrder() {
    let traverse = [];

    // Add left node.
    if (this.left) {
      traverse = traverse.concat(this.left.traverseInOrder());
    }

    // Add root.
    traverse.push(this.value);

    // Add right node.
    if (this.right) {
      traverse = traverse.concat(this.right.traverseInOrder());
    }

    return traverse;
  }

  toString() {
    return this.traverseInOrder().toString();
  }
}