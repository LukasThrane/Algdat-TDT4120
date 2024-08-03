class DoublyLinkedListNode {
  value: number;
  next: DoublyLinkedListNode | null;
  prev: DoublyLinkedListNode | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  head: DoublyLinkedListNode | null;
  tail: DoublyLinkedListNode | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  // List-Prepend
  prepend(value: number) {
    const newNode = new DoublyLinkedListNode(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }

  // List-Insert (insert after a specific node value)
  insertAfter(afterValue: number, value: number) {
    const newNode = new DoublyLinkedListNode(value);
    const node = this.search(afterValue);
    if (node) {
      newNode.next = node.next;
      newNode.prev = node;
      if (node.next) {
        node.next.prev = newNode;
      } else {
        this.tail = newNode;
      }
      node.next = newNode;
    }
  }

  // List-Insert' (insert at the end)
  insertAtEnd(value: number) {
    const newNode = new DoublyLinkedListNode(value);
    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  // List-Search (search by value)
  search(value: number): DoublyLinkedListNode | null {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  // List-Search' (recursive search)
  searchRecursive(
    value: number,
    node: DoublyLinkedListNode | null = this.head
  ): DoublyLinkedListNode | null {
    if (!node) {
      return null;
    }
    if (node.value === value) {
      return node;
    }
    return this.searchRecursive(value, node.next);
  }

  // List-Delete (delete by value)
  delete(value: number) {
    const node = this.search(value);
    if (node) {
      if (node.prev) {
        node.prev.next = node.next;
      } else {
        this.head = node.next;
      }
      if (node.next) {
        node.next.prev = node.prev;
      } else {
        this.tail = node.prev;
      }
    }
  }

  // List-Delete' (delete by reference)
  deleteNode(node: DoublyLinkedListNode) {
    if (!node) return;

    if (node.prev) {
      node.prev.next = node.next;
    } else {
      this.head = node.next;
    }

    if (node.next) {
      node.next.prev = node.prev;
    } else {
      this.tail = node.prev;
    }
  }

  printList() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

export { DoublyLinkedList, DoublyLinkedListNode };
