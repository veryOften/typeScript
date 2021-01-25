interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
}

type StackNode = {
    value: string;
    next?: StackNode;
};

class StackImpl implements Stack {
    private _size: number = 0;
    private head?: StackNode;
    constructor(private capacity: number) {}
    get size() {
        return this._size;
    }
    push(value: string): void {
        if (this._size === this.capacity) {
            throw new Error("Stack is full");
        }
        const node: StackNode = { value, next: this.head };
        this.head = node;
        this._size++;
    }
    pop(): string {
        // null == undefined, null !== undefined
        if (this.head == null) {
            throw new Error("Stack is empty!");
        }
        const node = this.head;
        this.head = node.next;
        this._size--;
        return node.value;
    }
}

const stack = new StackImpl(3);
stack.push("Santos 1");
stack.push("Mario 2");
stack.push("Steve 3");
