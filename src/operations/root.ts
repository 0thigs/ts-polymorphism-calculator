import { Operation } from "./operations"

export class Root extends Operation {
  calculate(): number {
    return Math.pow(this.a, 1 / this.b) 
  }
}
