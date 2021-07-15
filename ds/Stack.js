class Stack {
  constructor() {
    // this.length = 0;
    // this.top = null;
    this.stackArr = [];
  }

  peek() {
    return this.stackArr[this.stackArr.length-1];
  }

  push(value) {
    this.stackArr.push(value);
    // this.top = this.stackArr[this.length];
    // this.length++;
    return this;
  }

  pop() {
    const lastItem = this.stackArr.pop();
    // this.length--;
    // this.top = this.stackArr[this.length-1];
    return lastItem;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log('popped item: ', stack.pop());
console.log('len: ', stack);
console.log('top: ', stack.peek());