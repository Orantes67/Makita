import { Node } from "./Node.js";

export class StackLinkedlist {
  constructor() {
    this.head = null;
    this.count = 0;
  }

  push(item) {
    const node = new Node(item);

    if (this.head == null) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.count++;
  }

  pop() {
    if (!this.head) return null;
    const value = this.head.data;
    this.head = this.head.next;
    this.count--;
    return value;
  }

  peek() {
    if (!this.head) return null;
    return this.head.data;
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.count;
  }
  printList() {
    let current = this.head;
    let print;
    for (let i = 0; i <= this.size() && current !== undefined; i++) {
      console.log(current.getData());
      print = current.getData();
      current = current.next;
    }
  }
  
  print() {
    let current = this.head;
    for (let i = 0; i < this.count; i++) {
      console.log(current.getData());
    }
  }
}





