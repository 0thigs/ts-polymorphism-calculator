export abstract class Operation {
  constructor(protected a: number, protected b: number) {}
  abstract calculate(): number
}
