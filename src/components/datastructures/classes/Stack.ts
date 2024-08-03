export class Stack {
  stack: number[];
  top: number;

  constructor(stack: number[] = []) {
    this.stack = stack;
    this.top = stack.length;
  }

  peek() {
    if (this.top === 0) {
      throw new Error("Stack is empty");
    }
    return this.stack[this.top - 1];
  }

  push(value: number) {
    this.stack[this.top] = value;
    this.top++;
  }

  pop() {
    if (this.top === 0) {
      throw new Error("Stack is empty");
    }

    const poppedValue = this.stack[this.top - 1];
    this.stack.pop();
    this.top--;
    
    return poppedValue;
  }
}
