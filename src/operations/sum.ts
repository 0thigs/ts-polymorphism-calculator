import { Operation } from "./operations"

export class Sum extends Operation {
  calculate(): number {
    return this.a + this.b
  }
}
