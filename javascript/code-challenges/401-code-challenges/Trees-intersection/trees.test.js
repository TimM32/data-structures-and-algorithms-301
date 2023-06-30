'use strict';
const tree_intersection = require('./tree-intersection');
const { Node, Tree } = require('../binary-trees/index');

describe('Tree Intersection', () => {
  test('Successfully intersect two binary trees', () => {
    // Create the first binary tree
    let binaryTree1 = new Tree();
    binaryTree1.root = new Node(1);
    binaryTree1.root.left = new Node(2);
    binaryTree1.root.right = new Node(3);

    // Create the second binary tree
    let binaryTree2 = new Tree();
    binaryTree2.root = new Node(1);
    binaryTree2.root.left = new Node(3);
    binaryTree2.root.right = new Node(5);

    // Perform the tree intersection
    let intersection = tree_intersection(binaryTree1, binaryTree2);

    // Verify the intersection result
    expect(intersection).toEqual([1, 3]);
  });

  test('No intersection between two empty binary trees', () => {
    // Create two empty binary trees
    let binaryTree1 = new Tree();
    let binaryTree2 = new Tree();

    // Perform the tree intersection



    // Verify the intersection result
    expect(()=> tree_intersection(binaryTree1, binaryTree2)).toThrow('Empty Tree');
  });

  test('No intersection between two non-matching binary trees', () => {
    // Create the first binary tree
    let binaryTree1 = new Tree();
    binaryTree1.root = new Node(1);
    binaryTree1.root.left = new Node(2);
    binaryTree1.root.right = new Node(3);

    // Create the second binary tree
    let binaryTree2 = new Tree();
    binaryTree2.root = new Node(4);
    binaryTree2.root.left = new Node(5);
    binaryTree2.root.right = new Node(6);

    // Perform the tree intersection
    let intersection = tree_intersection(binaryTree1, binaryTree2);

    // Verify the intersection result
    expect(intersection).toEqual([]);
  });
});
