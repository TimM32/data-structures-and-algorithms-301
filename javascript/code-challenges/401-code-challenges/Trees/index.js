'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }

}

class Tree {
  constructor() {
    this.root = null;
  }


  preOrder() {
    const results = [];
    const traverse = (node) => {
      results.push(node.value);

      if (node.left) {
        traverse(node.left);
      }

      if (node.right) {
        traverse(node.right);
      }
    };

    traverse(this.root);
    return results;
  }

  inOrder() {
    const results = [];
    const traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }
      results.push(node.value);

      if (node.right) {
        traverse(node.right);
      }
    };
    traverse(this.root);
    return results;
  }

  postOrder() {
    const results = [];
    const traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      results.push(node.value);
    };

    if (this.root) {
      traverse(this.root);
    }
    return results;
  }
}
