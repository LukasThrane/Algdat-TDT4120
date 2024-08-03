export class Queue {
  queue: number[];
  head: number;
  tail: number;

  constructor(initialQueue: number[] = []) {
    this.queue = initialQueue.slice();
    this.head = 0;
    this.tail = initialQueue.length;
  }

  enqueue(value: number) {
    this.queue[this.tail] = value;
    this.tail++;
  }

  dequeue() {
    if (this.head === this.tail) {
      throw new Error("Queue is empty");
    }
    
    const dequeuedValue = this.queue[this.head];
    this.head++;

    if (this.head === this.tail) {
      this.head = 0;
      this.tail = 0;
      this.queue = [];
    }

    return dequeuedValue;
  }

  printQueue() {
    console.log("Queue:", this.queue.slice(this.head, this.tail));
  }
}
