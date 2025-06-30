import { Operation } from "./operations"

export class Division extends Operation {
  calculate(): number {
    if (this.b === 0) throw new Error("Divisão por zero não permitida.")
    return this.a / this.b
  }
}
