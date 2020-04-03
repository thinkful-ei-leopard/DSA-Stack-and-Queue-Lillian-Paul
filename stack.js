'use strict';
class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }

    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

module.exports = Stack;

const starTrek = new Stack();

function populateStar(stack) {
  stack.push('Kirk');
  stack.push('Spock');
  stack.push('McCoy');
  stack.push('Scotty');
}

populateStar(starTrek);
// console.log(starTrek);

// 2. methods for a stack

function peek(stack) {
  return stack.top.data;
}

// console.log(peek(starTrek))

function isEmpty(stack) {
  if (stack.top === null) {
    return 'stack is empty';
  } else {
    return 'stack is not empty';
  }
}

// console.log(isEmpty(starTrek))

function display(stack) {
  let currentNode = stack.top;
  while (currentNode !== null) {
    console.log(currentNode.data);
    currentNode = currentNode.next;
  }
  return;
}

// starTrek.pop()
// starTrek.pop()

console.log(display(starTrek));


