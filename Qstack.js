const Stack = require('./stack');

class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }
 // push to stack 1 
  enqueue(value) {
    while (this.stack2.top !== null) {
      this.stack1.push(this.last.pop());
    }

    this.stack1.push(value);
  }
  // check if anything in stack 2
  // pop from stack 1 --> push stack 2
  dequeue() {
    while (this.stack1.top !== null) {
      this.stack2.push(this.stack1.pop());
    }
   
    return this.stack2.pop();
  }
}


function createStarTrekQueue() {
  const starTrekQ = new Queue();
  // starTrekQ.enqueue('Kirk');
  // starTrekQ.enqueue('Spock');
  // starTrekQ.enqueue('Uhura');
  // starTrekQ.enqueue('Sulu');
  // starTrekQ.enqueue('Checkov');
  // starTrekQ.dequeue();
  // starTrekQ.dequeue();

  return starTrekQ;
}

const starTrekQ = createStarTrekQueue();

console.log(starTrekQ)
