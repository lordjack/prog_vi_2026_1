import { Conta } from "./conta.js";
import { Pessoa } from "./pessoa.js";

let pessoa1 = new Pessoa("Jackson Five", 38, "11999999999");
let pessoa2 = new Pessoa("Chaves", 8, "11988888888");

try {
  pessoa1.verificarIdade();
  pessoa2.verificarIdade();
} catch (error) {
  console.log(error);
}

let conta1 = new Conta(pessoa1);
let conta2 = new Conta(pessoa2);

conta1.depositar(5000);
conta1.depositar(1500);

conta2.depositar(3000);

console.log("Início");
console.log(conta1.pessoa.nome + " - R$" + conta1.saldo);
console.log(conta2.pessoa.nome + " - R$" + conta2.saldo);

try {
  conta1.sacar(1900);
  conta2.sacar(1000);
} catch (error) {
  console.log(error);
}

try {
  conta2.sacar(9999);
} catch (error) {
  console.log(error);
}

try {
  conta1.transferir(conta2, 1200);
} catch (error) {
  console.log(error);
}

console.log("=== Extrato Final ===");
conta1.exibirHistorico();
console.log("-------------------");
conta2.exibirHistorico();
