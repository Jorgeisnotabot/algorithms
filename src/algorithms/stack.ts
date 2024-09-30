class StackNode<T> {
    value: T;
    next: StackNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

export default class Stack<T>{
    private top: StackNode<T> | null;

    constructor() {
        this.top = null;
    }   

    push(value: T): void {
        const newNode = new StackNode(value);
        newNode.next = this.top;
        this.top = newNode;
    }

    pop(): T | undefined {
        if (!this.top) return undefined;
        const value = this.top.value;
        this.top = this.top.next;
        return value;
    }

    peek(): T | undefined {
        return this.top?.value;
    }

    isEmpty(): boolean {
        return this.top === null;
    }

    print(): void {
        let current = this.top;
        const values = [];
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        console.log(values.join(' <- '));
}
}

const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
stack.print();
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.isEmpty());