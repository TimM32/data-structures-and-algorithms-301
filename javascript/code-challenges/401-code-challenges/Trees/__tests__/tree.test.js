`use strict`;

const { Tree, Node, BinarySearch } = require(`../index.js`);


describe(`BinarySearch and Tree`, () => {
  let binarysearch;
  let tree;
  beforeEach(() => {
    binarysearch = new BinarySearch();
    tree = new Tree();
  });


  test(`Can successfully instantiate an empty tree`, () => {
    expect(bst.root).toBeNull();
  });

  test(`Can successfully instantiate a tree with a single root`, () => {
    bst.add(1);
    expect(bst.root.value).toEqual(1);
  });


  test(`Can successfully add a left child and right child properly to a node for BinarySearch`, () => {
    bst.add(1);
    bst.add(2);
    bst.add(3);
    expect(bst.root.value).toEqual(1);
    expect(bst.root.right.value).toEqual(2);
    expect(bst.root.right.right.value).toEqual(3);
  });


  test(`Can successfully return a collection from a pre-order traversal`, () => {
    bst.add(1);
    bst.add(2);
    bst.add(3);
    expect(bst.preOrder()).toEqual([1, 2, 3]);
  });


   test(`Can successfully return a collection from an in-order traversal`, () => {
    bst.add(1);

    expect(bst.inOrder()).toEqual([1]);
  });


  test(`Can successfully return a collection from a post-order traversal`, () => {
    bst.add(1);

    expect(bst.postOrder()).toEqual([1]);
  });


  test(`Returns False for the contains method, given an existing or non-existing node value`, () => {
    bst.add(1);
    bst.add(2);
    bst.add(3);
    expect(bst.containsValue(4)).toBeFalsy();
  });


  test(`Returns True for the contains method, given an existing node value`, () => {
    bst.add(1);
    bst.add(2);
    bst.add(3);
    expect(bst.containsValue(3)).toBeTruthy();
  });


