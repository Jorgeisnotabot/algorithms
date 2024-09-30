class KeyValueStore<T> {
    private store: { [key: string]: T };
    
    constructor() {
        this.store = {};
    }

    set(key: string, value: T): void {
        this.store[key] = value;
    }

    get(key: string): T | undefined {
        return this.store[key];
    }

    delete(key: string): void{
        delete this.store[key];
    }

    has(key: string): boolean {
        return key in this.store;
    }

    keys(): string[] {
        return Object.keys(this.store);
    }
}

const store = new KeyValueStore<number>();
store.set('apple', 5);
store.set('banana', 10);
console.log(store.get('apple')); // Output: 5
console.log(store.has('banana')); // Output: 10

