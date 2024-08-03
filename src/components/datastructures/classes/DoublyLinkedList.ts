export class DoublyLinkedListNode {
  value: number;
  next: DoublyLinkedListNode | null;
  prev: DoublyLinkedListNode | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export class DoublyLinkedList {
  head: DoublyLinkedListNode | null;
  tail: DoublyLinkedListNode | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  addNode(value: number) {
    const newNode = new DoublyLinkedListNode(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (this.tail) {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
    }
  }

  deleteNode(value: number) {
    if (this.head === null) return;

    if (this.head.value === value) {
      this.head = this.head.next;
      if (this.head !== null) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }
      return;
    }

    let current = this.head;
    while (current !== null && current.value !== value) {
      current = current.next as DoublyLinkedListNode;
    }

    if (current !== null) {
      if (current.prev !== null) {
        current.prev.next = current.next;
      }
      if (current.next !== null) {
        current.next.prev = current.prev;
      }
      if (current === this.tail) {
        this.tail = current.prev;
      }
    }
  }

  printList() {
    let current = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
}
