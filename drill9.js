'use strict';
const Queue = require('./queue');

function makeFQueue(){
  const fQueue = new Queue;

  fQueue.enqueue('Jane');
  fQueue.enqueue('Madonna');
  fQueue.enqueue('Beyonce');
  
  return fQueue;
}

const fQueue = makeFQueue();

function makeMQueue(){
  const mQueue = new Queue;

  mQueue.enqueue('Frank');
  mQueue.enqueue('John');
  mQueue.enqueue('Sherlock');
  mQueue.enqueue('David');
  mQueue.enqueue('Christopher');

  
  return mQueue;
}

const mQueue = makeMQueue();

function squareDance(m, f){
  while(m.first !== null && f.first !== null){
    console.log(`F dancer is ${f.first.value}, m dancer is ${m.first.value}`);
    m.dequeue();
    f.dequeue();
  }

  if(m.first !== null){
    return 'there are still guys waiting to dance';
  }

  if(f.first !== null){
    return 'there are still girls waiting to dance';
  }
}

console.log(squareDance(mQueue, fQueue));
