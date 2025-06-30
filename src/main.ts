import readline from 'readline'
import { Sum } from './operations/sum'
import { Subtraction } from './operations/subtraction'
import { Division } from './operations/division'
import { Power } from './operations/power'
import { Root } from './operations/root'
import { Bhaskara } from './operations/bhaskara'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const ask = (question: string): Promise<string> => {
  return new Promise(resolve => rl.question(question, resolve))
}

async function main() {
  console.log("=== CALCULADORA ESPECIAL CLI ===")

  while (true) {
    console.log("\nOperações disponíveis:")
    console.log("1 - Soma")
    console.log("2 - Subtração")
    console.log("3 - Divisão")
    console.log("4 - Potência")
    console.log("5 - Raiz")
    console.log("6 - Bhaskara (equação de 2º grau)")
    console.log("0 - Sair")

    const option = await ask("Escolha uma operação: ")

    if (option === '0') {
      console.log("Encerrando a calculadora. Até a próxima!")
      rl.close()
      break
    }

    switch (option) {
      case '1':
      case '2':
      case '3':
      case '4':
      case '5': {
        const a = Number(await ask("Digite o primeiro número: "))
        const b = Number(await ask("Digite o segundo número: "))
        let result: number

        switch (option) {
          case '1':
            result = new Sum(a, b).calculate()
            break
          case '2':
            result = new Subtraction(a, b).calculate()
            break
          case '3':
            result = new Division(a, b).calculate()
            break
          case '4':
            result = new Power(a, b).calculate()
            break
          case '5':
            result = new Root(a, b).calculate()
            break
        }

        console.log(`Resultado: ${result}`)
        break
      }

      case '6': {
        const a = Number(await ask("Digite o valor de A: "))
        const b = Number(await ask("Digite o valor de B: "))
        const c = Number(await ask("Digite o valor de C: "))
        const result = new Bhaskara(a, b, c).calculate()
        console.log(result)
        break
      }

      default:
        console.log("Opção inválida!")
    }
  }
}

main()
