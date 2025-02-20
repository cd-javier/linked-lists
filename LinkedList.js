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
}

export default LinkedList;
