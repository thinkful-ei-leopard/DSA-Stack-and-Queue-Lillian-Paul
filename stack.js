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

//console.log(display(starTrek));

// 3. check for palindromes

function is_palindrome(str) {
  str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

  const palStack = new Stack;
  
  for(let i = 0; i < str.length; i++){
    palStack.push(str[i]);
  }

  let revStr = '';
  while(palStack.top !== null){
    revStr += palStack.top.data;
    palStack.pop();
  }
 
  if(revStr === str){
    return `${str} is a palindrome!`;
  } else {
    return `${str} is NOT a palindrome`;
  }

}

// console.log(is_palindrome('dad'));
// console.log(is_palindrome('A man, a plan, a canal: Panama'));
// console.log(is_palindrome('1001'));
// console.log(is_palindrome('Tauhida'));