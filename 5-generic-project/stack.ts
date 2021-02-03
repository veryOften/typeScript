interface Stack<T> {
  readonly size: number;
  push(value: T): void;
  pop(): T;
}

type StackNode<T> = {
  value: T;
  next?: StackNode<T>;
};

class StackImpl<T> implements Stack<T> {
  private _size: number = 0;
  private head?: StackNode<T>;
  constructor(private capacity: number) {}
  get size() {
    return this._size;
  }
  push(value: T): void {
    if (this._size === this.capacity) {
      throw new Error("Stack is full");
    }
    const node: StackNode<T> = { value, next: this.head };
    this.head = node;
    this._size++;
  }
  pop(): T {
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

const stack = new StackImpl<string>(3);
stack.push("Santos 1");
stack.push("Mario 2");
stack.push("Steve 3");

const stack2 = new StackImpl<number>(3);
stack2.push(123);
stack2.push(456);
stack2.push(789);
