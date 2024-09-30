import Stack from './stack.js';

class Queue<T> {
    private stack1: Stack<T>;
    private stack2: Stack<T>;

    constructor() {
        this.stack1 = new Stack<T>();
        this.stack2 = new Stack<T>();
    }

    enqueue(value: T): void {
        this.stack1.push(value);
    }

    dequeue(): T | undefined {
        if (this.stack2.isEmpty()) {
            while (!this.stack1.isEmpty()) {
                this.stack2.push(this.stack1.pop()!);
            }
        }
        return this.stack2.pop();
    }

    peek(): T | undefined {
        if (this.stack2.isEmpty()) {
            while (!this.stack1.isEmpty()) {
                this.stack2.push(this.stack1.pop()!);
            }
        }
        return this.stack2.peek();
    }

    isEmpty(): boolean {
        return this.stack1.isEmpty() && this.stack2.isEmpty();
    }

    print(): void {
        const temp = new Stack<T>();

        // Move elements from stack2 to temp to print them in correct order
        while (!this.stack2.isEmpty()) {
            temp.push(this.stack2.pop()!);
        }

        // Print elements in temp (which are in correct order)
        temp.print();

        // Move elements back from temp to stack2
        while (!temp.isEmpty()) {
            this.stack2.push(temp.pop()!);
        }

        // Print elements in stack1 (which are in correct order)
        this.stack1.print();
    }
}