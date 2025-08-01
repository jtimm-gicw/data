
// Stack class
class Stack {
  constructor() {
    this.storage = [];
  }

  push(value) {
    this.storage.push(value);
  }

  pop() {
    return this.storage.pop();
  }

  peek() {
    return this.storage[this.storage.length - 1];
  }

  isEmpty() {
    return this.storage.length === 0;
  }
}

// Create a PseudoQueue class
class PseudoQueue {
  constructor() {
    this.stack1 = new Stack(); // for enqueue
    this.stack2 = new Stack(); // for dequeue
  }
/*
stack1 – for incoming values (enqueue)

stack2 – used to reverse order temporarily to get the FIFO behavior (dequeue)
*/

  enqueue(value) {
    this.stack1.push(value);
  } // pushing the value into stack1, like a normal stack

  /*
  If stack2 is empty, we move everything from stack1 into stack2 (which reverses the order).
Then we pop() from stack2 — which now gives us the first inserted item
  */
  dequeue() {
    // If both stacks are empty, there’s nothing to dequeue
    if (this.stack1.isEmpty() && this.stack2.isEmpty()) {
      throw new Error("Queue is empty");
    }

    // Only move items if stack2 is empty
    if (this.stack2.isEmpty()) {
      while (!this.stack1.isEmpty()) {
        const value = this.stack1.pop();
        this.stack2.push(value);
      }
    }

    return this.stack2.pop();
  }
}


