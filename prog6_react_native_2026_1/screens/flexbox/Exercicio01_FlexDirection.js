/*
============================================================
  EXERCÍCIO 01 — flexDirection
============================================================

  CONCEITO:
    No React Native, todo componente View usa Flexbox por padrão.
    A propriedade `flexDirection` define o EIXO PRINCIPAL do layout:
      - 'column'  → filhos empilhados de cima para baixo (PADRÃO no RN)
      - 'row'     → filhos lado a lado da esquerda para a direita

  TAREFA:
    O componente `ItemProduto` abaixo exibe nome, preço e estoque de
    um Produto, mas todos os textos ficam empilhados em coluna.

    1. Altere o estilo de `containerItem` para que nome e preço
       apareçam LADO A LADO (row).

    2. Adicione um texto de estoque abaixo do bloco nome/preço,
       usando uma View separada com flexDirection: 'column'.

    3. DESAFIO: Experimente mudar flexDirection para 'row-reverse'
       e 'column-reverse' e observe o resultado.

  RESULTADO ESPERADO:
    ┌─────────────────────────────────┐
    │  Chocolate          R$ 10,00   │
    │  Em estoque: 11 un             │
    ├─────────────────────────────────┤
    │  Salgadinho         R$ 15,00   │
    │  Em estoque: 5 un              │
    └─────────────────────────────────┘
============================================================
*/

import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Produto } from "../../components/Produto.js";

// ── Componente para exibir um produto ──────────────────────
const ItemProduto = ({ produto }) => {
  return (
    // TODO: mude flexDirection para 'row' aqui
    <View style={styles.containerItem}>
      <Text style={styles.nome}>{produto.nome}</Text>
      <Text style={styles.preco}>R$ {produto.preco.toFixed(2)}</Text>
      {/* TODO: adicione aqui um <Text> exibindo o estoque */}
    </View>
  );
};

// ── Tela principal ─────────────────────────────────────────
export default function Exercicio01() {
  const produtos = [
    new Produto("Chocolate", 10, 11),
    new Produto("Salgadinho", 15, 5),
    new Produto("Refrigerante", 5, 10),
    new Produto("Suco de Laranja", 8, 20),
  ];

  return (
    <ScrollView contentContainerStyle={styles.tela}>
      <Text style={styles.titulo}>Exercício 01 — flexDirection</Text>
      {produtos.map((p, i) => (
        <ItemProduto key={i} produto={p} />
      ))}
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
  containerItem: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    // TODO: adicione  flexDirection: 'row'  e veja o que muda
  },
  nome: {
    fontSize: 16,
    fontWeight: "600",
    // TODO (desafio): adicione  flex: 1  para ocupar o espaço restante
  },
  preco: {
    fontSize: 16,
    color: "#2e7d32",
  },
});
