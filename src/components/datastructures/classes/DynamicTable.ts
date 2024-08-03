class DynamicTable {
  table: any[];
  capacity: number;
  size: number;

  constructor(initialCapacity: number = 4) {
    this.table = new Array(initialCapacity);
    this.capacity = initialCapacity;
    this.size = 0;
  }

  // Function to insert an element into the dynamic table
  insert(value: any) {
    if (this.size === this.capacity) {
      this.resize();
    }
    this.table[this.size] = value;
    this.size++;
  }

  // Function to resize the dynamic table
  private resize() {
    const newCapacity = this.capacity * 2;
    const newTable = new Array(newCapacity);
    for (let i = 0; i < this.size; i++) {
      newTable[i] = this.table[i];
    }
    this.table = newTable;
    this.capacity = newCapacity;
  }

  // Function to get an element at a specific index
  get(index: number): any {
    if (index < 0 || index >= this.size) {
      throw new Error("Index out of bounds");
    }
    return this.table[index];
  }

  // Function to print the current state of the dynamic table
  printTable() {
    console.log("Table:", this.table.slice(0, this.size));
    console.log("Size:", this.size, "Capacity:", this.capacity);
  }
}

export default DynamicTable;
