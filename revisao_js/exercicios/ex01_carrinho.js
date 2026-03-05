import { Pessoa } from "../pessoa.js";

// Classe Produto com 3 atributos
class Produto {
  constructor(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;
  }
}

// Classe Carrinho — associação com Pessoa (cliente) e array de Produto (itens)
class Carrinho {
  constructor(cliente) {
    this.cliente = cliente; // objeto do tipo Pessoa
    this.itens = [];
  }

  adicionarProduto(produto) {
    this.itens.push(produto);
  }

  calcularTotal() {
    let total = 0;
    for (let produto of this.itens) {
      total += produto.preco;
    }
    return total;
  }

  exibirResumo() {
    console.log("Cliente: " + this.cliente.nome);
    console.log("Telefone: " + this.cliente.telefone);
    console.log("--- Itens do Carrinho ---");
    for (let produto of this.itens) {
      console.log("  " + produto.nome + " - R$" + produto.preco.toFixed(2));
    }
    console.log("Total: R$" + this.calcularTotal().toFixed(2));
  }
}

// ---- Programa principal ----

let cliente1 = new Pessoa("Ana Lima", 22, "11911111111");
let cliente2 = new Pessoa("Carlos Souza", 17, "11922222222");

let carrinho1 = new Carrinho(cliente1);
let carrinho2 = new Carrinho(cliente2);

let p1 = new Produto("Camiseta", 49.9, 10);
let p2 = new Produto("Calça Jeans", 129.9, 5);
let p3 = new Produto("Tênis", 199.9, 3);

carrinho1.adicionarProduto(p1);
carrinho1.adicionarProduto(p2);
carrinho1.adicionarProduto(p3);

carrinho2.adicionarProduto(p1);
carrinho2.adicionarProduto(p3);

console.log("=== Carrinho de " + cliente1.nome + " ===");
carrinho1.exibirResumo();

console.log("\n=== Carrinho de " + cliente2.nome + " ===");
carrinho2.exibirResumo();
