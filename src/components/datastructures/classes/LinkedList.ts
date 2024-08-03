class LinkedListNode {
  value: number;
  next: LinkedListNode | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  head: LinkedListNode | null;

  constructor() {
    this.head = null;
  }

  // List-Prepend
  prepend(value: number) {
    const newNode = new LinkedListNode(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  // List-Insert (insert after a specific node value)
  insertAfter(afterValue: number, value: number) {
    const newNode = new LinkedListNode(value);
    const node = this.search(afterValue);
    if (node) {
      newNode.next = node.next;
      node.next = newNode;
    }
  }

  // List-Insert' (insert at the end)
  insertAtEnd(value: number) {
    const newNode = new LinkedListNode(value);
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

  // List-Search (search by value)
  search(value: number): LinkedListNode | null {
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
    node: LinkedListNode | null = this.head
  ): LinkedListNode | null {
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
    if (!this.head) return;

    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
    }
  }

  // List-Delete' (delete by reference)
  deleteNode(node: LinkedListNode) {
    if (!this.head) return;

    if (this.head === node) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next && current.next !== node) {
      current = current.next;
    }

    if (current.next === node) {
      current.next = node.next;
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

export { LinkedList, LinkedListNode };
