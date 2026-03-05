/*
 * Exercício 01 — Produto e Carrinho
 *
 * Crie a classe Produto com os atributos: nome, preco e estoque.
 *
 * Depois, crie a classe Carrinho que tenha:
 *   - Um atributo cliente (objeto do tipo Pessoa)
 *   - Um atributo itens (array de objetos do tipo Produto)
 *
 * Implemente os métodos:
 *   - adicionarProduto(produto)  → adiciona um produto ao array itens
 *   - calcularTotal()            → retorna a soma dos preços de todos os itens
 *   - exibirResumo()             → exibe o nome e telefone do cliente
 *                                  e lista todos os produtos com seus preços e o total
 *
 * No programa principal:
 *   - Crie pelo menos 2 objetos Pessoa como clientes
 *   - Crie pelo menos 3 objetos Produto
 *   - Monte um carrinho para cada cliente com produtos diferentes
 *   - Exiba o resumo de cada carrinho
 */

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
