'Use Strict';
class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

function fizzBuzzTree(root) {
  if (root === null) {
    return null;
  }

  const newRoot = new Node(convertValue(root.value));

  for (const child of root.children) {
    newRoot.children.push(fizzBuzzTree(child));
  }

  return newRoot;
}

function convertValue(value) {
  if (value % 3 === 0 && value % 5 === 0) {
    return 'FizzBuzz';
  } else if (value % 3 === 0) {
    return 'Fizz';
  } else if (value % 5 === 0) {
    return 'Buzz';
  } else {
    return String(value);
  }
}

