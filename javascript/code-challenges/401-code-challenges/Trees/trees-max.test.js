'use strict';

//  Code 16 test
test('Return the max value from a binary tree', () => {
  tree.root = new Node(10);
  tree.root.left = new Node(5);
  tree.root.right = new Node(15);
  tree.root.left.left = new Node(1);
  tree.root.left.right = new Node(8);

  expect(tree.maxValue()).toEqual(15);
});
});
