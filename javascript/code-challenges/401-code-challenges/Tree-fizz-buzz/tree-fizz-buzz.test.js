// Test case 1
const root1 = new Node(8);
root1.children.push(new Node(3));
root1.children[0].children.push(new Node(9));
root1.children.push(new Node(15));
root1.children[1].children.push(new Node(10));
root1.children[1].children.push(new Node(7));
root1.children[1].children.push(new Node(1));
root1.children.push(new Node(5));

const modifiedTree1 = fizzBuzzTree(root1);

// modified tree 1:
console.log(modifiedTree1.value); // Output: Fizz
console.log(modifiedTree1.children[0].value); // Output: FizzBuzz
console.log(modifiedTree1.children[0].children[0].value); // Output: Fizz
console.log(modifiedTree1.children[1].value); // Output: Buzz
console.log(modifiedTree1.children[1].children[0].value); // Output: Buzz
console.log(modifiedTree1.children[1].children[1].value); // Output: 1

// Test case 2
const root2 = new Node(7);
root2.children.push(new Node(3));
root2.children[0].children.push(new Node(9));
root2.children.push(new Node(11));
root2.children[1].children.push(new Node(5));
root2.children[1].children.push(new Node(13));
root2.children[1].children.push(new Node(8));
root2.children.push(new Node(21));

const modifiedTree2 = fizzBuzzTree(root2);

// modified tree 2:
console.log(modifiedTree2.value); // Output: Fizz
console.log(modifiedTree2.children[0].value); // Output: Fizz
console.log(modifiedTree2.children[0].children[0].value); // Output: Fizz
console.log(modifiedTree2.children[1].value); // Output: 11
console.log(modifiedTree2.children[1].children[1].value); // Output: 8

// Test case 3
const root3 = new Node(4);
root3.children.push(new Node(2));
root3.children.push(new Node(10));
root3.children[1].children.push(new Node(15));
root3.children.push(new Node(6));
root3.children[2].children.push(new Node(3));

const modifiedTree3 = fizzBuzzTree(root3);

// modified tree 3:
console.log(modifiedTree3.value); // Output: 4
console.log(modifiedTree3.children[1].value); // Output: Buzz
console.log(modifiedTree3.children[1].children[0].value); // Output: Fizz
console.log(modifiedTree3.children[2].value); // Output: Fizz
