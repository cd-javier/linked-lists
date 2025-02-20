class Node {
  constructor() {
    this.value = null;
    this.next = null;
  }

  append(node) {
    if (this.next === null) {
      this.next = node;
    } else {
      this.next.append(node);
    }
  }
}

class LinkedList {
  constructor() {
    this.head = new Node();
  }

  append(value) {
    const newItem = new Node();
    newItem.value = value;

    if (this.head.value === null) {
      this.head = newItem;
    } else {
      this.head.append(newItem);
    }
  }

  prepend(value) {
    const newItem = new Node();
    newItem.value = value;

    if (this.head.value === null) {
      this.append(value);
    } else {
      newItem.next = this.head;
      this.head = newItem;
    }
  }
}

export default LinkedList;
