'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  append(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  insertBefore(arguement, value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }
    if(this.head.value === arguement) {
      node.text = this.head;
      this.head = node;
      return;
    } else {
      let prevNode = null;
      let currentNode = this.head;
      while(currentNode) {
        if(currentNode.value === arguement) {
          node.next = currentNode;
          prevNode.next = node;
          return
        }
        prevNode = currentNode;
        currentNode = currentNode.next;
      }
      prevNode.next = node;
    }
  }

  insertAfter(arguement, value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === arguement) {
        node.next = currentNode.next;
        currentNode.next = node;
        return;
      }
      currentNode = currentNode.next;
    }

    currentNode.next = node;
  }

  includes(value){
    let current = this.head;
    while(current){
      if(current.value === value){
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  }

  toString() {
    let current = this.head;
    let result = current.head;
    while (current.next) {
      current = current.next;
      result += '-->' + current.value;
    }
    result += '--> NULL';
    return result;
  }

}

module.exports = LinkedList;
