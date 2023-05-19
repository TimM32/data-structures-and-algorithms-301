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



});


// module.exports = LinkedList;
