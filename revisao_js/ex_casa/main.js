/*
Exercicio 06: Produto e Carrinho
Crie a classe produto com os atributos: nome, preco e estoque

Depois, crie a classe carrinho que tenha
 - um atributo cliente(objeto do tipo pessoa)
 - um atributo itens (array de objetos do tipo Produto)

implemente os métodos
 - addProduto(produto) = add produto ao array iten
 - calcularTotal() = add o try catch
 - exibirResumo()


No programa principal
 - crie pelo menos 2 objetos pessoa como cliente
 - crie pelo menos 3 objetos produto
 - Monte um carrinho para cada cliente com produtos diferentes
 - Exiba o resumo de cada carrinho
*/
import { Pessoa } from "./pessoa.js";
import { Produto } from "./produto.js";
import { Carrinho } from "./carrinho.js";

let cliente1 = new Pessoa("Jackson Five", 38, "49 8800-5500");
let cliente2 = new Pessoa("Chaves", 8, "49 8800-5500");

let produto1 = new Produto("Chocolate", 10, 11);
let produto2 = new Produto("Salgadinho", 15, 5);
let produto3 = new Produto("Refrigerante", 5, 10);

let carrinhoPessoa1 = new Carrinho(cliente1);
let carrinhoPessoa2 = new Carrinho(cliente2);

carrinhoPessoa1.addProduto(produto3);
carrinhoPessoa1.addProduto(produto1);

carrinhoPessoa2.addProduto(produto2);
carrinhoPessoa2.addProduto(produto1);

carrinhoPessoa1.exibirResumo();
carrinhoPessoa2.exibirResumo();
