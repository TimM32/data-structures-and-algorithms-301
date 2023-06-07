'use strict';


breadthFirst() {

  if (!this.root) {

    return [];

  }

  const queue = [this.root];
  const results = [];

  while (queue.length > 0) {
    const node = queue.shift();
    results.push(node.value);

    if (node.left) {
      queue.push(node.left);

    }

    if (node.right) {
      queue.push(node.right);
    }

  }

  return results;

}


