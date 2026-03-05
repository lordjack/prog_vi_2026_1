import { Conta } from "./conta.js";
import { Pessoa } from "./pessoa.js";

// Criando objetos do tipo Pessoa
let pessoa1 = new Pessoa("Jackson Five", 38, "11999999999");
let pessoa2 = new Pessoa("Chaves", 8, "11988888888");

// Verificação de idade com try/catch
try {
  pessoa1.verificarIdade();
  pessoa2.verificarIdade(); // lança exceção pois tem 8 anos
} catch (error) {
  console.log(error);
}

// Associação: objeto Pessoa é passado como titular da Conta
let conta1 = new Conta(pessoa1);
let conta2 = new Conta(pessoa2);

conta1.depositar(2000);
conta2.depositar(3000);

console.log("\n--- Início ---");
conta1.exibirSaldo();
conta2.exibirSaldo();

try {
  conta1.sacar(1900);
  conta2.sacar(1000);
} catch (error) {
  console.log(error);
}

console.log("\n--- Transação 01 ---");
conta1.exibirSaldo();
conta2.exibirSaldo();

try {
  conta2.transferir(conta1, 500);
} catch (error) {
  console.log(error);
}

console.log("\n--- Transação 02 ---");
conta1.exibirSaldo();
conta2.exibirSaldo();
