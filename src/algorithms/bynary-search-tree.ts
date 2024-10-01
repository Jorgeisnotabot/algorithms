class TreeNode<T> {
    value: T;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree<T> {
    private root: TreeNode<T> | null;

    constructor() {
        this.root = null;
    }

    insert(value: T): void {
        this.root = this.insertNode(this.root, value);
    }

    private insertNode(node: TreeNode<T> | null, value: T): TreeNode<T> {
        if (node === null) {
            return new TreeNode(value);
        }

        if (value < node.value) {
            node.left = this.insertNode(node.left, value);
        } else if (value > node.value) {
            node.right = this.insertNode(node.right, value);
        }

        return node;
    }

    search(value: T): boolean {
        return this.searchNode(this.root, value);
    }

    private searchNode(node: TreeNode<T> | null, value: T): boolean {
        if (node === null) {
            return false;
        }

        if (value === node.value) {
            return true;
        } else if (value < node.value) {
            return this.searchNode(node.left, value);
        } else {
            return this.searchNode(node.right, value);
        }
    }

    inorderTraversal(): T[] {
        const result: T[] = [];
        this.inorderTraversalNode(this.root, result);
        return result;
    }

    private inorderTraversalNode(node: TreeNode<T> | null, result: T[]): void {
        if (node !== null) {
            this.inorderTraversalNode(node.left, result);
            result.push(node.value);
            this.inorderTraversalNode(node.right, result);
        }
    }
}

// Usage
const bst = new BinarySearchTree<number>();
bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.insert(1);
bst.insert(9);
console.log(bst.inorderTraversal()); // Output: [1, 3, 5, 7, 9]
console.log(bst.search(3)); // Output: true
console.log(bst.search(6)); // Output: false