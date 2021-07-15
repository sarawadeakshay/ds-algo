class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const node = new Node(value);
    this.head = node;
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  printList() {
    let currentNode = this.head;
    const valArray = [];
    while(currentNode !== null) {
      valArray.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(valArray);
  }

  insert(value, index) {
    if (!index || index < 0) {
      console.log('Please pass correct index');
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else if (index >= this.length) {
      this.append(value);
    } else {
      const newNode = new Node(value);
      let currentNode = this.head;
      let count = 1;
      while(count < index) {
        currentNode = currentNode.next;
        count++;
      }
      newNode.next = currentNode.next;
      currentNode.next = newNode;
      this.length++;
    }
  }

  delete(index) {
    if (index === 0) {
      this.head = this.head.next;
      this.length--;
    } else if (index > 0 && index < this.length) {
      let count = 1;
      let currentNode = this.head;
      while(count < index) {
        currentNode = currentNode.next;
        count++;
      }
      const nodeToDelete = currentNode.next;
      currentNode.next = nodeToDelete.next;
      this.length--;
    } else {
      console.log('Please enter correct index!');
    }
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while(second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    this.printList();
  }
}

/** TODO:
 * Implement reverse()
 *  */ 

const ll = new LinkedList(10);
ll.append(20);
ll.append(40);
ll.prepend(1);
ll.insert(30, 3);
ll.insert(29, 3);
ll.insert(49, 4);
console.log('After insertions:');
ll.printList();
ll.delete(6);
console.log('After deleting index #2:');
ll.printList();
ll.reverse();