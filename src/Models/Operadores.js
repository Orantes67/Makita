import { StackLinkedlist } from "./StackLinkedlist.js";

export class Operadores {
  constructor() {
    this.Pila = new StackLinkedlist();
    this.Pilafinal = new StackLinkedlist();
    this.Pilaoperadores = new StackLinkedlist();
  }

  EvaluarOperadores(operador) {
    switch (operador) {
      case "+":
      case "-":
        return 1;
      case "*":
      case "/":
        return 2;
      case "^":
      case "$":
        return 3;
      default:
        return 0;
    }
  }
}
