import { Operation } from "./operations"

export class Power extends Operation {
  calculate(): number {
    return Math.pow(this.a, this.b)
  }
}
