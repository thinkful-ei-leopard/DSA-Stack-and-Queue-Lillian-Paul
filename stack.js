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

const starTrek = new Stack;

function populateStar(list) {
  list.push('Kirk');
  list.push('Spock');
  list.push('McCoy');
  list.push('Scotty');
}

populateStar(starTrek);
console.log(starTrek);