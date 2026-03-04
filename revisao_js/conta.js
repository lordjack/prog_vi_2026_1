// exporta a classe Conta como módulo ES6
export class Conta {
  constructor(titular) {
    this.titular = titular;
    this.saldo = 0;
  }

  depositar(valor) {
    this.saldo += valor;
  }

  sacar(valor) {
    if (valor > this.saldo) {
      throw "Saldo Insuficiente";
    }
    this.saldo -= valor;
  }

  transferir(outraConta, valor) {
    this.sacar(valor);
    outraConta.depositar(valor);
  }
}
