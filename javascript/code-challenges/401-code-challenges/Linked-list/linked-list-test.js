'use strict';

const LinkedList = require('./index');

describe('Link List', () => {
  test('Can succesfully instantiate an emplty linked list', () => {
    const list = new LinkedList;

    expect(list.head).toBeNUll();
  });

  test('Can properly insert into a linked list', () => {
    const list = new LinkedList();
    list.insert(1);

    expect(list.head.value).toEqual(1);
    expect(list.head.next).toBeNUll();
  });

  test('The head property will properly point to the first node in the linked list', () => {
    const list = new LinkedList();
    list.insert(2);

    expect(list.head.value).toEqual(2);
    expect(list.head.next).toBeNUll();

    console.log('Did we get the linked list 1 inserted', list.insert(1));
    list.inset(1);
    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next).toBeNUll();

  });

  test('Will find a value in linked list and return as true', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);

    expect(list.includes(2)).toBeTruthy();
  });

  test('Return false when searching for in a linked list for a value that does not exist', () => {
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

});


// module.exports = LinkedList;
