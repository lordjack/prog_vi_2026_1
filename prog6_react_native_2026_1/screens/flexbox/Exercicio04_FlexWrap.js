/*
============================================================
  EXERCÍCIO 04 — flexWrap
============================================================

  CONCEITO:
    Por padrão, os filhos de uma View ficam em UMA única linha
    (ou coluna), mesmo que ultrapassem o tamanho da tela.
    `flexWrap` controla esse comportamento:
      'nowrap'  → todos na mesma linha, sem quebra (padrão)
      'wrap'    → quebra para a próxima linha quando necessário
      'wrap-reverse' → quebra em sentido inverso

    Combinado com flexDirection: 'row', `flexWrap: 'wrap'` cria
    uma GRADE RESPONSIVA de itens.

  TAREFA:
    Você tem uma lista de produtos de uma loja.

    1. Faça o container de produtos usar flexDirection: 'row'
       e flexWrap: 'wrap' para exibir os produtos em grade.

    2. Defina a largura de cada card como '48%' para ter 2
       colunas. Lembre-se de adicionar um espaço (gap) entre eles.

    3. DESAFIO A: Tente criar 3 colunas mudando a largura para '31%'.

    4. DESAFIO B: Use o estado da cor do estoque para colorir
       a borda do card:
         estoque > 10  → verde  (#2e7d32)
         estoque > 0   → amarelo (#f57c00)
         estoque === 0 → vermelho (#c62828)

  RESULTADO ESPERADO (2 colunas):
    ┌───────────┐  ┌───────────┐
    │ Chocolate │  │ Salgadinho│
    │ R$ 10,00  │  │ R$ 15,00  │
    │ Estoque:11│  │ Estoque: 5│
    └───────────┘  └───────────┘
    ┌───────────┐  ┌───────────┐
    │Refrigerante  │ Suco      │
    │ R$  5,00  │  │ R$  8,00  │
    │ Estoque:10│  │ Estoque:20│
    └───────────┘  └───────────┘
============================================================
*/

import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Produto } from "../../components/Produto.js";

// ── Cor de alerta pelo estoque ─────────────────────────────
const corEstoque = (estoque) => {
  // TODO (desafio B): retorne a cor correta baseado no estoque
  return "#1565c0";
};

// ── Card de produto ────────────────────────────────────────
const CardProduto = ({ produto }) => {
  return (
    <View style={[styles.card, { borderColor: corEstoque(produto.estoque) }]}>
      <Text style={styles.nomeProduto}>{produto.nome}</Text>
      <Text style={styles.precoProduto}>R$ {produto.preco.toFixed(2)}</Text>
      <Text style={styles.estoqueProduto}>Estoque: {produto.estoque} un</Text>
    </View>
  );
};

// ── Tela principal ─────────────────────────────────────────
export default function Exercicio04() {
  const produtos = [
    new Produto("Chocolate", 10, 11),
    new Produto("Salgadinho", 15, 5),
    new Produto("Refrigerante", 5, 10),
    new Produto("Suco de Laranja", 8, 20),
    new Produto("Água Mineral", 3, 0),
    new Produto("Biscoito", 6, 3),
    new Produto("Iogurte", 9, 15),
    new Produto("Café", 12, 8),
  ];

  return (
    <ScrollView contentContainerStyle={styles.tela}>
      <Text style={styles.titulo}>Exercício 04 — flexWrap</Text>

      {/* TODO: adicione flexDirection: 'row' e flexWrap: 'wrap' aqui */}
      <View style={styles.grade}>
        {produtos.map((p, i) => (
          <CardProduto key={i} produto={p} />
        ))}
      </View>
    </ScrollView>
  );
}

// ── Estilos ────────────────────────────────────────────────
const styles = StyleSheet.create({
  tela: {
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  grade: {
    // TODO: adicione aqui:
    //   flexDirection: 'row'
    //   flexWrap: 'wrap'
    //   gap: 10  (ou use marginBottom/marginRight nos cards)
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 14,
    borderLeftWidth: 4,
    borderColor: "#1565c0",
    // TODO: defina width: '48%' para criar 2 colunas
    //       ou width: '31%' para 3 colunas
    marginBottom: 10,
  },
  nomeProduto: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 4,
  },
  precoProduto: {
    fontSize: 14,
    color: "#2e7d32",
    marginBottom: 4,
  },
  estoqueProduto: {
    fontSize: 12,
    color: "#888",
  },
});
