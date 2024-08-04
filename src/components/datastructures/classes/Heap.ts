export class Heap<T> {
  private heap: T[] = [];
  private comparator: (a: T, b: T) => boolean;

  constructor(comparator: (a: T, b: T) => boolean) {
    this.comparator = comparator;
  }

  private parent(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  private leftChild(index: number): number {
    return 2 * index + 1;
  }

  private rightChild(index: number): number {
    return 2 * index + 2;
  }

  private swap(index1: number, index2: number): void {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  private heapifyUp(index: number): void {
    let currentIndex = index;
    while (
      currentIndex > 0 &&
      this.comparator(
        this.heap[currentIndex],
        this.heap[this.parent(currentIndex)]
      )
    ) {
      this.swap(currentIndex, this.parent(currentIndex));
      currentIndex = this.parent(currentIndex);
    }
  }

  private heapifyDown(index: number): void {
    let currentIndex = index;
    while (this.leftChild(currentIndex) < this.heap.length) {
      let largestChildIndex = this.leftChild(currentIndex);
      if (
        this.rightChild(currentIndex) < this.heap.length &&
        this.comparator(
          this.heap[this.rightChild(currentIndex)],
          this.heap[largestChildIndex]
        )
      ) {
        largestChildIndex = this.rightChild(currentIndex);
      }

      if (
        this.comparator(this.heap[currentIndex], this.heap[largestChildIndex])
      ) {
        break;
      }

      this.swap(currentIndex, largestChildIndex);
      currentIndex = largestChildIndex;
    }
  }

  insert(value: T): void {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  extract(): T | null {
    if (this.heap.length === 0) {
      return null;
    }
    if (this.heap.length === 1) {
      return this.heap.pop() || null;
    }

    const root = this.heap[0];
    this.heap[0] = this.heap.pop() as T;
    this.heapifyDown(0);
    return root;
  }

  peek(): T | null {
    return this.heap.length > 0 ? this.heap[0] : null;
  }

  size(): number {
    return this.heap.length;
  }
}
