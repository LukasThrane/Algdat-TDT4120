export class HashTableNode {
  key: number;
  value: any;
  next: HashTableNode | null;

  constructor(key: number, value: any) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

export class HashTable {
  table: Array<HashTableNode | null>;
  size: number;

  constructor(size: number) {
    this.size = size;
    this.table = new Array(size).fill(null);
  }

  // Basic hash function (modular hashing)
  hash(key: number): number {
    return key % this.size;
  }

  // Chained-Hash-Insert
  insert(key: number, value: any) {
    const index = this.hash(key);
    const newNode = new HashTableNode(key, value);
    if (this.table[index] === null) {
      this.table[index] = newNode;
    } else {
      let current = this.table[index];
      while (current!.next !== null) {
        current = current!.next;
      }
      current!.next = newNode;
    }
  }

  // Chained-Hash-Search
  search(key: number): any | null {
    const index = this.hash(key);
    let current = this.table[index];
    while (current !== null) {
      if (current.key === key) {
        return current.value;
      }
      current = current.next;
    }
    return null;
  }

  // Chained-Hash-Delete
  delete(key: number): boolean {
    const index = this.hash(key);
    let current = this.table[index];
    let prev = null;
    while (current !== null) {
      if (current.key === key) {
        if (prev === null) {
          this.table[index] = current.next;
        } else {
          prev.next = current.next;
        }
        return true;
      }
      prev = current;
      current = current.next;
    }
    return false;
  }

  printTable() {
    for (let i = 0; i < this.size; i++) {
      let current = this.table[i];
      const items = [];
      while (current !== null) {
        items.push(`{${current.key}: ${current.value}}`);
        current = current.next;
      }
      console.log(`${i}: ${items.join(" -> ")}`);
    }
  }
}
