/*
============================================================
  EXERCÍCIO 05 — flex (divisão proporcional de espaço)
============================================================

  CONCEITO:
    A propriedade `flex` define quanto espaço disponível um
    componente deve OCUPAR em relação aos seus irmãos.

    Exemplo com 3 irmãos:
      flex: 1, flex: 2, flex: 1  →  25% | 50% | 25%
      flex: 1, flex: 1, flex: 1  →  33% | 33% | 33%
      flex: 3, flex: 1           →  75%       | 25%

    Regra importante: para que `flex` funcione, o PAI precisa
    ter uma altura definida (ou `flex: 1` também).

  TAREFA:
    Você vai construir o layout de uma tela de resumo do carrinho
    dividida em três seções verticais:
      - Cabeçalho (header): tamanho fixo, sem flex
      - Conteúdo (lista de itens): cresce e ocupa o espaço disponível
      - Rodapé (total + botão): tamanho fixo, sem flex

    1. Adicione `flex: 1` no componente raiz e na seção de conteúdo
       para que a lista ocupe o espaço entre o header e o footer.

    2. Experimente mudar o `flex` do `painelEsquerdo` e `painelDireito`
       para criar divisões diferentes (ex: 2 e 1 = 66% e 33%).

    3. DESAFIO: Adicione uma terceira seção de "produtos relacionados"
       na parte inferior dividindo o espaço com `flex`.

  RESULTADO ESPERADO:
    ┌──────────────────────────────────┐  ← header fixo
    │  Carrinho de Jackson Five        │
    ├──────────────────────────────────┤
    │  Chocolate         R$ 10,00      │
    │  Salgadinho        R$ 15,00      │  ← conteúdo com flex: 1
    │  Refrigerante      R$  5,00      │
    │                                  │
    ├──────────────────────────────────┤
    │  Total: R$ 30,00   [Finalizar]   │  ← footer fixo
    └──────────────────────────────────┘
============================================================
*/

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Carrinho } from "../../components/Carrinho.js";
import { Pessoa } from "../../components/Pessoa.js";
import { Produto } from "../../components/Produto.js";

// ── Linha de item do carrinho ──────────────────────────────
const LinhaItem = ({ item }) => (
  <View style={styles.linhaItem}>
    <Text style={styles.nomeItem}>{item.nome}</Text>
    <Text style={styles.precoItem}>R$ {item.preco.toFixed(2)}</Text>
  </View>
);

// ── Tela principal ─────────────────────────────────────────
export default function Exercicio05() {
  const cliente = new Pessoa("Jackson Five", 38, "49 8800-5500");
  const carrinho = new Carrinho(cliente);

  carrinho.addProduto(new Produto("Chocolate", 10, 11));
  carrinho.addProduto(new Produto("Salgadinho", 15, 5));
  carrinho.addProduto(new Produto("Refrigerante", 5, 10));
  carrinho.addProduto(new Produto("Suco de Laranja", 8, 20));
  carrinho.addProduto(new Produto("Biscoito", 6, 3));

  return (
    // TODO: adicione  flex: 1  aqui para que a tela ocupe tudo
    <View style={styles.tela}>
      {/* ── CABEÇALHO (tamanho fixo, sem flex) ── */}
      <View style={styles.header}>
        <Text style={styles.tituloHeader}>Carrinho</Text>
        <Text style={styles.subtituloHeader}>{cliente.nome}</Text>
      </View>

      {/* ── CONTEÚDO (deve crescer com flex) ── */}
      {/* TODO: adicione  flex: 1  aqui para que a lista preencha o espaço */}
      <View style={styles.conteudo}>
        {carrinho.itens.map((item, i) => (
          <LinhaItem key={i} item={item} />
        ))}
      </View>

      {/* ── RODAPÉ (tamanho fixo, sem flex) ── */}
      <View style={styles.footer}>
        {/* TODO: observe como justifyContent: 'space-between' + flexDirection: 'row'
                  posicionam o total à esquerda e o botão à direita */}
        <View style={styles.painelEsquerdo}>
          <Text style={styles.labelTotal}>Total</Text>
          <Text style={styles.valorTotal}>
            R$ {carrinho.calcularTotal().toFixed(2)}
          </Text>
        </View>
        <View style={styles.painelDireito}>
          <TouchableOpacity style={styles.botaoFinalizar}>
            <Text style={styles.textoBotao}>Finalizar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

// ── Estilos ────────────────────────────────────────────────
const styles = StyleSheet.create({
  tela: {
    // TODO: adicione  flex: 1
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "#1565c0",
    padding: 20,
    paddingTop: 48,
  },
  tituloHeader: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  subtituloHeader: {
    color: "#bbdefb",
    fontSize: 14,
    marginTop: 2,
  },
  conteudo: {
    // TODO: adicione  flex: 1
    //       Experimente também com valores como 2 ou 3
    padding: 16,
  },
  linhaItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 14,
    marginBottom: 8,
    borderRadius: 8,
    elevation: 1,
  },
  nomeItem: {
    fontSize: 15,
  },
  precoItem: {
    fontSize: 15,
    color: "#2e7d32",
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    elevation: 8,
  },
  painelEsquerdo: {
    // TODO: experimente trocar o valor de flex aqui (ex: flex: 2)
    flex: 1,
  },
  painelDireito: {
    // TODO: experimente trocar o valor de flex aqui (ex: flex: 1)
    flex: 1,
    alignItems: "flex-end",
  },
  labelTotal: {
    fontSize: 12,
    color: "#888",
  },
  valorTotal: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1565c0",
  },
  botaoFinalizar: {
    backgroundColor: "#2e7d32",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
});
