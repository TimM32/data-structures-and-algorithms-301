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
    const travese = (node) => {
      results.push(node.value);

      if (node.left) {
        travese(node.left);
      }

      if (node.right) {
        travese(node.right);
      }
    };

    travese(this.root);
    return results;
  }

  inOrder() {
    cosnt results = [];
    const travese = (node) => {
      id (node.left) {
        travese(node.left);
      }
    }
  }
}
