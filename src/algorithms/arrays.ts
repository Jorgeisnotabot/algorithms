class MyArray<T> {
    private items: T[];
    
    
    constructor() {
        this.items = [];
    }

    push(item: T): void{
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    get(index: number): T | undefined {
        return this.items[index];
    }

    size(): number {
        return this.items.length;
    }

    print(): void {
        console.log(this.items.toString());
    }
}

const arr = new MyArray<number>();
arr.push(1);
arr.push(2);
arr.push(3);
arr.print();
console.log(arr.pop());
console.log(arr.size());