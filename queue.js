class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }
    this.last = node;
  }

  dequeue() {
    // if the queue is empty, there is nothing to return
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    // if this is the last item in the queue
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}

function createStarTrekQueue() {
  const starTrekQ = new Queue();
  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhura');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');

  return starTrekQ;
}

const starTrekQ = createStarTrekQueue();

function peek(q) {
  return q.first;
}

// console.log(peek(starTrekQ));

function isEmpty(q) {
  if (q.first === null) {
    return 'queue is empty';
  } else {
    return 'queue is not empty';
  }
}

// console.log(isEmpty(starTrekQ));

function display(q) {
  let currentNode = q.first;
  while (currentNode !== null) {
    console.log(currentNode.value);
    currentNode = currentNode.next;
  }
  return;
}

// starTrekQ.dequeue();
// starTrekQ.dequeue();

// display(starTrekQ);

