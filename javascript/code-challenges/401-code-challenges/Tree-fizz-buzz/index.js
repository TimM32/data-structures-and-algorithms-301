'use strict';

class Node:

    def __init__(self, value):

self.value = value

self.children = []



def fizzBuzzTree(root):

if root is None:
return None

new_root = Node(convert_value(root.value))

for child in root.children:

  new_root.children.append(fizzBuzzTree(child))

return new_root

def convert_value(value):

if value % 3 == 0 and value % 5 == 0:

return "FizzBuzz"

    elif value % 3 == 0:

return "Fizz"

    elif value % 5 == 0:

return "Buzz"

    else:

return str(value)
