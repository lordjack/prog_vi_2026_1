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
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { Pessoa } from "../components/Pessoa.js";
import { Produto } from "../components/Produto.js";
import { Carrinho } from "../components/Carrinho.js";

const ViewCarrinho = ({ carrinho }) => {
  return (
    <View>
      <Text> Cliente: {carrinho.cliente.nome}</Text>
      <Text> Telefone: {carrinho.cliente.telefone}</Text>
      {carrinho.itens.map(function (item, index) {
        return (
          <Text key={index}>
            {item.nome} - R${item.preco.toFixed(2)}
          </Text>
        );
      })}
      <Text>Total: R${carrinho.calcularTotal().toFixed(2)} </Text>
    </View>
  );
};

const ViewFiltrarCarrinho = ({ carrinho, valorMin, valorMax }) => {
  let filtrados = carrinho.itens.filter(function (item) {
    return item.preco >= valorMin && item.preco <= valorMax;
  });

  console.log(filtrados);
  return (
    <View>
      <Text>Filtro Cliente: {carrinho.cliente.nome}</Text>
      <Text>Telefone: {carrinho.cliente.telefone}</Text>
      {filtrados.map(function (item, index) {
        return (
          <Text key={index}>
            {item.nome} - R${item.preco.toFixed(2)}
          </Text>
        );
      })}
    </View>
  );
};

export default function Main() {
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

  return (
    <ScrollView>
      <Text> Resumo dos Carrinhos</Text>
      <ViewCarrinho carrinho={carrinhoPessoa1} />
      <ViewCarrinho carrinho={carrinhoPessoa2} />
      <ViewFiltrarCarrinho
        carrinho={carrinhoPessoa2}
        valorMin={0}
        valorMax={100}
      />
    </ScrollView>
  );
}
