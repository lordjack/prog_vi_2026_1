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

let conta1 = new Conta("Jackson Five");
let conta2 = new Conta("Chaves");

conta1.depositar(2000);
conta2.depositar(3000);

console.log("Início");
console.log(conta1.titular + " - R$" + conta1.saldo);
console.log(conta2.titular + " - R$" + conta2.saldo);

conta1.sacar(1900);
conta2.sacar(1000);

console.log("Transação 01");
console.log(conta1.titular + " - R$" + conta1.saldo);
console.log(conta2.titular + " - R$" + conta2.saldo);

conta2.transferir(conta1, 500);

console.log("Transação 02");
console.log(conta1.titular + " - R$" + conta1.saldo);
console.log(conta2.titular + " - R$" + conta2.saldo);
