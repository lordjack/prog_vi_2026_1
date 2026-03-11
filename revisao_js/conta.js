// exporta a classe Conta como módulo ES6
export class Conta {
  constructor(pessoa) {
    this.pessoa = pessoa;
    this.saldo = 0;
    this.historico = [];
  }

  depositar(valor) {
    this.saldo += valor;
    this.historico.push("Depositar: +R$" + valor.toFixed(2));
  }

  sacar(valor) {
    if (valor > this.saldo) {
      throw "Saldo Insuficiente";
    }
    this.saldo -= valor;
    this.historico.push("Sacar: -R$" + valor.toFixed(2));
  }

  transferir(outraConta, valor) {
    this.sacar(valor);
    outraConta.depositar(valor);

    this.historico[this.historico.length - 1] =
      "Trasferencia enviar de " + outraConta.pessoa.nome + ": -R$" + valor.toFixed(2);

    outraConta.historico[outraConta.historico.length - 1] =
      "Trasferencia recebida de " + this.pessoa.nome + ": +R$" + valor.toFixed(2);
  }
  
  exibirSaldo(){
    console.log(this.pessoa.nome + " - Saldo: R$" + this.saldo);
  }

  exibirHistorico(){
    console.log(" --- Histórico de "+this.pessoa.nome +" ---");
    if(this.historico.length ===0){
      console.log(" Nenhuma operação realizada")
    }else{
      for (let operacao in this.historico){
        console.log(" "+ this.historico[operacao]);
      }
    }
    console.log(" Saldo atual: R$"+this.saldo.toFixed(2));
  }

}
