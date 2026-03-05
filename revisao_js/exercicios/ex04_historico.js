/*
 * Exercício 04 — Histórico de Conta Bancária (Desafio)
 *
 * Expanda o sistema de contas bancárias visto em aula:
 *
 * Crie a classe Conta com associação a Pessoa (atributo titular) e os atributos:
 *   - saldo     → número (começa em 0)
 *   - historico → array (começa vazio)
 *
 * Implemente os métodos:
 *   - depositar(valor)              → soma o valor ao saldo e registra no historico
 *   - sacar(valor)                  → lança exceção se saldo insuficiente;
 *                                     caso contrário, subtrai e registra no historico
 *   - transferir(outraConta, valor) → usa sacar e depositar internamente;
 *                                     registra a operação no historico de ambas as contas
 *                                     informando o nome do outro titular
 *   - exibirSaldo()                 → exibe o nome do titular e o saldo atual
 *   - exibirHistorico()             → lista todas as operações registradas
 *                                     e o saldo atual no final
 *
 * No programa principal:
 *   - Crie 2 objetos Pessoa e 2 objetos Conta
 *   - Realize depósitos, saques e uma transferência entre as contas
 *   - Inclua pelo menos um saque com saldo insuficiente (use try/catch)
 *   - Ao final, exiba o histórico completo das duas contas
 */

import { Pessoa } from "../pessoa.js";

// Conta estendida com histórico de operações
class Conta {
  constructor(titular) {
    this.titular = titular; // associação com Pessoa
    this.saldo = 0;
    this.historico = []; // registro de todas as operações
  }

  depositar(valor) {
    this.saldo += valor;
    this.historico.push("Depósito: +R$" + valor.toFixed(2));
  }

  sacar(valor) {
    if (valor > this.saldo) {
      throw "Saldo insuficiente para saque de R$" + valor.toFixed(2);
    }
    this.saldo -= valor;
    this.historico.push("Saque: -R$" + valor.toFixed(2));
  }

  transferir(outraConta, valor) {
    this.sacar(valor);
    outraConta.depositar(valor);
    // Substitui as últimas entradas por mensagens mais descritivas
    this.historico[this.historico.length - 1] =
      "Transferência enviada para " +
      outraConta.titular.nome +
      ": -R$" +
      valor.toFixed(2);
    outraConta.historico[outraConta.historico.length - 1] =
      "Transferência recebida de " +
      this.titular.nome +
      ": +R$" +
      valor.toFixed(2);
  }

  exibirSaldo() {
    console.log(this.titular.nome + " - Saldo: R$" + this.saldo.toFixed(2));
  }

  exibirHistorico() {
    console.log("--- Histórico de " + this.titular.nome + " ---");
    if (this.historico.length === 0) {
      console.log("  Nenhuma operação realizada.");
    } else {
      for (let operacao of this.historico) {
        console.log("  " + operacao);
      }
    }
    console.log("  Saldo atual: R$" + this.saldo.toFixed(2));
  }
}

// ---- Programa principal ----

let pessoa1 = new Pessoa("Helena Martins", 30, "11966666666");
let pessoa2 = new Pessoa("Igor Alves", 27, "11977777777");

let conta1 = new Conta(pessoa1);
let conta2 = new Conta(pessoa2);

conta1.depositar(5000);
conta1.depositar(1500);

conta2.depositar(2000);

try {
  conta1.sacar(800);
} catch (error) {
  console.log(error);
}

try {
  conta2.sacar(9999); // saldo insuficiente
} catch (error) {
  console.log(error);
}

try {
  conta1.transferir(conta2, 1200);
} catch (error) {
  console.log(error);
}

console.log("\n=== Extrato Final ===");
conta1.exibirHistorico();
console.log();
conta2.exibirHistorico();
