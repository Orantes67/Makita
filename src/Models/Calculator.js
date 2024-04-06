import { Operadores } from "./Operadores.js";

export class Calculator {
  constructor() {
    this.object = new Operadores();
  }

  infijoaprefijo(expresion) {
    let operandos = "";
    let final = "";
    let cont = expresion.length - 1;

    while (cont >= 0) {
      let char = expresion[cont];

      if (char >= "0" && char <= "9") {
        operandos = char + operandos;
      } else if (
        char === ")" ||
        char === "*" ||
        char === "/" ||
        char === "+" ||
        char === "-" ||
        char === "^" ||
        char === "$"
      ) {
        if (operandos !== "") {
          final = operandos + final;
          operandos = "";
        }
        this.object.Pila.push(char);
      } else if (char === "(") {
        if (operandos !== "") {
          final = operandos + final;
          operandos = "";
        }
        while (!this.object.Pila.isEmpty() && this.object.Pila.peek() !== ")") {
          final = this.object.Pila.pop() + final;
        }
        if (!this.object.Pila.isEmpty() && this.object.Pila.peek() === ")") {
          this.object.Pila.pop();
        }
      }
      cont--;
    }

    if (operandos !== "") {
      final = operandos + final;
      operandos = "";
    }

    while (!this.object.Pila.isEmpty()) {
      final = this.object.Pila.pop() + final;
    }

    console.log(final);
    return final;
  }
}
