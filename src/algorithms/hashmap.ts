// Hashmaps are data structures that store key-value pairs.
// They are similar to arrays, but the keys are not ordered.
// This allows for fast lookups, adds, and deletes.
// Hashmaps are also known as dictionaries or associative arrays.
// The keys in a hashmap are unique, meaning that they cannot be duplicated.
// The values in a hashmap can be duplicated.
// Hashmaps are implemented using arrays and linked lists.
// The keys are hashed to determine the index in the array where the value is stored.
// If two keys hash to the same index, a linked list is used to store the values.
// This is known as chaining.
// Hashmaps have an average time complexity of O(1) for lookups, adds, and deletes.
// However, in the worst case, the time complexity can be O(n) if all keys hash to the same index.
// This is known as a hash collision.
// To avoid hash collisions, it is important to use a good hashing function.
// A good hashing function should distribute the keys evenly across the array.
// Common hashing functions include the division method and the multiplication method.
// Hashmaps are commonly used in programming to store key-value pairs.
// They are used in databases, caches, and other data structures.
// Here is an example of a hashmap implementation in TypeScript:
// In TypeScript, hashmaps are typically implemented using objects or classes.
// Here is an example of a hashmap class in TypeScript:

// const myHashMap: { [key:string]: number } = {
//     "apple": 5,
//     "banana": 10,
//     "cherry": 15
// };

// // Accessing values in a hashmap is done by using the key as an index:
// console.log(myHashMap["apple"]); // Output: 5
// console.log(myHashMap["banana"]); // Output: 10

// // Adding values to a hashmap is done by assigning a value to a key:
// myHashMap["orange"] = 20;

// // Deleting values from a hashmap is done by using the delete keyword:
// delete myHashMap["banana"];

// // Iterating over the keys and values in a hashmap is done using a for...in loop:
// for (const key in myHashMap) {
//     console.log(key, myHashMap[key]);
// }

// if ("orange" in myHashMap) {
//     console.log("Orange is in the hashmap");
// } else {
//     console.log("Orange is not in the hashmap");
// }

export class HashMap<Key, Value> {
    private map: { [key: string]: Value } = {};

    // set method to add key-value pairs to the hashmap
    set(key: Key, value: Value): void {
        const stringKey = JSON.stringify(key);
        this.map[stringKey] = value;
    }

    get(key: Key): Value | undefined {
        const stringKey = JSON.stringify(key);
        return this.map[stringKey];
    }

    has(key: Key): boolean {
        const stringKey = JSON.stringify(key);
        return stringKey in this.map;
    }

    delete(key: Key): boolean {
        const stringKey = JSON.stringify(key);
        if (this.has(key)) {
            delete this.map[stringKey];
            return true;
        }
        return false;
    }

}
