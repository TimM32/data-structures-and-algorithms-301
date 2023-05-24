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

});

});



