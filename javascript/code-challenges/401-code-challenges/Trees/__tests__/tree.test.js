`use strict`;

const { Tree, Node, BinarySearch } = require(`../index.js`);

// Code Challenge 15: Trees Tests
describe(`Binary Tree`, () => {
  let bst;
  let tree;
  beforeEach(() => {
    binarysearch = new BinarySearch();
    tree = new Tree();
  });

  // Can successfully instantiate an empty tree
  test(`Can successfully instantiate an empty tree`, () => {
    expect(bst.root).toBeNull();
  });
