export class Carrinho {
  constructor(cliente) {
    this.cliente = cliente;
    this.itens = [];
  }

  addProduto(produto) {
    this.itens.push(produto);
  }

  calcularTotal() {
    let total = 0;
    for (let i in this.itens) {
      total += this.itens[i].preco;
    }
    return total;
  }

  exibirResumo() {
    console.log("Cliente: " + this.cliente.nome);
    console.log("Telefone: " + this.cliente.telefone);
    /*for (let i in this.itens) {
      console.log(this.itens[i].nome + " - R$" + this.itens[i].preco);
    }*/
    this.itens.map(function (item) {
      console.log(item.nome + " - R$" + item.preco);
    });
    console.log("Total: R$" + this.calcularTotal().toFixed(2));
  }

  /*
    faça o filtro dos produtos por cliente através do preço
  */
  filtrarProduto(valorMin = 0, valorMax =0) {
    let filtrados = this.itens.filter(function (item) {
      item.preco >= valorMin && item.preco <= valorMax;
    });

    filtrados.map(function (item) {
      console.log(item.nome + " - R$" + item.preco);
    });
  }
}
