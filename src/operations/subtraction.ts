import { Operation } from "./operations"

export class Subtraction extends Operation {
  calculate(): number {
    return this.a - this.b
  }
}
