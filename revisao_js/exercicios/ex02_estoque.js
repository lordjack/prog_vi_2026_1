import { Pessoa } from "../pessoa.js";

// Produto agora valida estoque antes de vender
class Produto {
  constructor(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;
  }

  // Lança exceção se a quantidade desejada for maior que o estoque
  verificarEstoque(quantidade) {
    if (quantidade > this.estoque) {
      throw (
        'Estoque insuficiente para "' +
        this.nome +
        '". Disponível: ' +
        this.estoque +
        " | Solicitado: " +
        quantidade
      );
    }
    console.log(
      '"' + this.nome + '" - estoque OK (' + quantidade + " unidade(s))",
    );
  }
}

class Carrinho {
  constructor(cliente) {
    this.cliente = cliente;
    this.itens = [];
  }

  adicionarProduto(produto, quantidade) {
    // Valida estoque antes de adicionar
    produto.verificarEstoque(quantidade);
    this.itens.push({ produto, quantidade });
  }

  calcularTotal() {
    let total = 0;
    for (let item of this.itens) {
      total += item.produto.preco * item.quantidade;
    }
    return total;
  }

  exibirResumo() {
    console.log("Cliente: " + this.cliente.nome);
    console.log("--- Itens do Carrinho ---");
    for (let item of this.itens) {
      console.log(
        "  " +
          item.produto.nome +
          " x" +
          item.quantidade +
          " - R$" +
          (item.produto.preco * item.quantidade).toFixed(2),
      );
    }
    console.log("Total: R$" + this.calcularTotal().toFixed(2));
  }
}

// ---- Programa principal ----

let cliente = new Pessoa("Beatriz Santos", 25, "11933333333");
let carrinho = new Carrinho(cliente);

let tenis = new Produto("Tênis", 199.9, 2);
let mochila = new Produto("Mochila", 89.9, 5);
let bone = new Produto("Boné", 39.9, 1);

// Tentativa 1: quantidade dentro do estoque
try {
  carrinho.adicionarProduto(tenis, 2);
} catch (error) {
  console.log(error);
}

// Tentativa 2: quantidade dentro do estoque
try {
  carrinho.adicionarProduto(mochila, 3);
} catch (error) {
  console.log(error);
}

// Tentativa 3: quantidade MAIOR que o estoque — lança exceção
try {
  carrinho.adicionarProduto(bone, 5);
} catch (error) {
  console.log(error);
}

console.log("\n=== Resumo do Pedido ===");
carrinho.exibirResumo();
