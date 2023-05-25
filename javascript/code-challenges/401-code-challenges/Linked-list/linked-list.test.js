'use strict';

const LinkedList = require('./index');

describe('Link List', () => {
  test('Can succesfully instantiate an emplty Linked list', () => {
    const list = new LinkedList;

    expect(list.head).toBeNUll();
  });

  test('Can properly insert into a Linked list', () => {
    const list = new LinkedList();
    list.insert(1);

    expect(list.head.value).toEqual(1);
    expect(list.head.next).toBeNUll();
  });

  test('The head property will properly point to the first node in the Linked list', () => {
    const list = new LinkedList();
    list.insert(2);

    expect(list.head.value).toEqual(2);
    expect(list.head.next).toBeNUll();

    console.log('Did we get the Linked list 1 inserted', list.insert(1));
    list.inset(1);
    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next).toBeNUll();

  });

  test('Will find a value in Linked list and return as true', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);

    expect(list.includes(2)).toBeTruthy();
  });

  test('Return false when searching for in a Linked list for a value that does not exist', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);

    expect(list.includes(3)).toBeFalsy();
  });

  test('Return a colelction of all values in a string from existing Linked List', () => {
    let list = new LinkedList();
    list.insert('{ a }');
    list.insert('{ b }');
    list.insert('{ c }');

    expect(list.toString()).toEqual('{ a } --> { b } --> { c } --> NULL');
  });

  test('Can we successfully insert a node before a node located in the middle of a Linked list', () => {
    const list = new LinkedList();
    list.append('a');
    list.append('b');
    list.append('c');
    list.append('d');

    expect(list.toString()).toEqual('{ a } -> { b } -> { c } -> { d } -> NULL');
    list.insertBefore('c', 'l');
    expect(list.toString()).toEqual('{ a } -> { b } -> { l } -> { c } -> { d } -> NULL');
  });

  test('Can successfully insert after a node in the middle of the Linked list', () => {
    const list = new LinkedList();
    list.append('a');
    list.append('b');
    list.append('c');
    list.append('d');

    expect(list.toString()).toEqual('{ a } -> { b } -> { c } -> { d } -> NULL');
    list.insertAfter('c', 'l');
    expect(list.toString()).toEqual('{ a } -> { b } -> { c } -> { l } -> { d } -> NULL');
  });

  test('Can successfully insert a node after the last node of the Linked list', () => {
    const list = new LinkedList();
    list.insert('d');
    list.insert('c');
    list.insert('b');
    list.insert('a');

    expect(list.toString()).toEqual('{ a } -> { b } -> { c } -> { d } -> NULL');
    list.insertAfter('d', 'l');
    expect(list.toString()).toEqual('{ a } -> { b } -> { c } -> { d } -> { l } -> NULL');
  });

  it('should return null for k greater than the length of the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(3);
    const result = linkedList.kthFromEnd(5);
    expect(result).toBeNull();
  });

  it('should return null for k equal to the length of the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(3);
    const result = linkedList.kthFromEnd(2);
    expect(result).toBeNull();
  });

  it('should return null for k not being a positive integer', () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(3);
    const result = linkedList.kthFromEnd(-1);
    expect(result).toBeNull();
  });

  it('should return the value of the only node in the linked list when k is 0 and list size is 1', () => {
    const linkedList = new LinkedList();
    linkedList.append(5);
    const result = linkedList.kthFromEnd(0);
    expect(result).toBe(5);
  });

  it('should return the value of the node at the specified position when k is somewhere in the middle of the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(3);
    linkedList.append(8);
    linkedList.append(2);
    linkedList.append(6);
    const result = linkedList.kthFromEnd(2);
    expect(result).toBe(8);
  });

  it('should return the value of the last node in the linked list when k is 0', () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(3);
    linkedList.append(8);
    linkedList.append(2);
    const result = linkedList.kthFromEnd(0);
    expect(result).toBe(2);
  });

});
