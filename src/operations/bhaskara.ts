export class Bhaskara {
  constructor(private a: number, private b: number, private c: number) {}

  calculate(): string {
    const delta = Math.pow(this.b, 2) - 4 * this.a * this.c
    if (delta < 0) return "A equação não possui raízes reais."

    const sqrtDelta = Math.sqrt(delta)
    const x1 = (-this.b + sqrtDelta) / (2 * this.a)
    const x2 = (-this.b - sqrtDelta) / (2 * this.a)

    return `As raízes são: x1 = ${x1}, x2 = ${x2}`
  }
}
