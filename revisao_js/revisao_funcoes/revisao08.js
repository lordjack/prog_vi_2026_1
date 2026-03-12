/*
Crie uma compra relacionado a pessoa e 
utilize a função map para listar a pessoa e produtos e filter para
filtrar os produtos por um preço deternimado
*/

import { Pessoa } from "./pessoa.js";
import { Produto } from "./produto.js";
import { Carrinho } from "./carrinho.js";

let pessoa1 = new Pessoa("Jackson Five", 38, "49 8800-5500");
let pessoa2 = new Pessoa("Chaves", 8, "49 3300-1100");

let produto1 = new Produto("Maça", 7, 20);
let produto2 = new Produto("Chocolate", 15, 25);
let produto3 = new Produto("Table", 1500, 2);

let carrinho1 = new Carrinho(pessoa1);
let carrinho2 = new Carrinho(pessoa2);

carrinho1.addProduto(produto3);
carrinho1.addProduto(produto2);

carrinho2.addProduto(produto1);
carrinho2.addProduto(produto2);

carrinho1.exibirResumo();
carrinho2.exibirResumo();

carrinho1.filtrarProduto(0, 50);

const [nomeCliente, produtoNome] = [carrinho1.cliente.nome, produto2.nome];

console.log(nomeCliente);
console.log(produtoNome);
