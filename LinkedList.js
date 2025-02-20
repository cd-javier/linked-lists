class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
  }

  size() {
    let counter = 0;

    let current = this.head;

    while (current) {
      current = current.next;
      counter++;
    }

    return counter;
  }

  getHead() {
    return this.head ? this.head.value : null;
  }

  getTail() {
    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    return current.value;
  }

  at(index) {
    let counter = 0;
    let current = this.head;

    while (counter !== index) {
      if (!current.next) return null;
      current = current.next;
      counter++;
    }

    return current.value;
  }

  pop() {
    if (!this.head) return;

    let current = this.head;

    while (current.next.next) {
      current = current.next;
    }

    current.next = null;
  }

  contains(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) return true;
      current = current.next;
    }

    return false;
  }
}

export default LinkedList;
