class CrazyQueue {
  constructor() {
    this.first = [];
    this.last = [];
  }

  enqueue(value) {
    const length = this.first.length;
    for (let i = 0; i < length; i++) {
      this.last.push(this.first.pop());
    }
    this.last.push(value);
    return this;
  }

  dequeue() {
    const length = this.last.length;
    for (let i = 0; i < length; i++) {
      this.first.push(this.last.pop());
    }
    // for (let item of this.last) {
    //   this.first.push(item);
    // }
    this.first.pop();
    return this;
  }
  peek() {
    if (this.last.length > 0) {
      return this.last[0];
    }
    return this.first[this.first.length - 1];
  }
}

const myQueue = new CrazyQueue();
myQueue.peek();
myQueue.enqueue('1');
myQueue.enqueue('2');
myQueue.enqueue('3');
console.log('queue: ', myQueue);
myQueue.peek();
myQueue.dequeue();
console.log('queue: ', myQueue);
myQueue.enqueue('4');
console.log('queue: ', myQueue);
myQueue.dequeue();
console.log('queue: ', myQueue);
myQueue.dequeue();
myQueue.peek();