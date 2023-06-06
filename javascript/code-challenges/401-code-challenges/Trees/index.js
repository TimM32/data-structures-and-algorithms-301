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



class BinarySearch extends Tree {
  constructor() {
    super();
  }

  add(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (true) {
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.right;
      } else {
        return null;
      }
    }
  }

  containedValue(value) {
    if (this.root === null) {
      return false;
    }

    let current = this.root;
    let found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) {
      return false;
    }
  }
}

module.exports = { Node, Tree, BinarySearch };
