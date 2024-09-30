class ListNode<T> {
    value: T;
    next: ListNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList<T>{
    private head: ListNode<T> | null;

    constructor() {
        this.head = null;
    }

    append(value: T): void {
        const newMode = new ListNode(value);
        if (!this.head) {
            this.head = newMode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newMode;
    }

    prepend(value: T): void {
        const newMode = new ListNode(value);
        newMode.next = this.head;
        this.head = newMode;
    }

    delete(value: T): void {
        if (!this.head) return;
        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while (current.next) {
            if (current.next.value === value) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }

    print(): void {
        let current = this.head;
        const values = [];
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        console.log(values.join(' -> '));
    }
}

const list = new LinkedList<number>();
list.append(1);
list.append(2);
list.prepend(0);
list.print();
list.delete(1);
list.print();