/*
============================================================
  EXERCÍCIO 06 — Layout Completo (integração de tudo)
============================================================

  CONCEITO:
    Este exercício combina TODOS os conceitos dos anteriores:
      ✔ flexDirection  (ex01)
      ✔ justifyContent (ex02)
      ✔ alignItems     (ex03)
      ✔ flexWrap       (ex04)
      ✔ flex           (ex05)

  TAREFA:
    Monte uma tela de loja com:

    PARTE A — Barra de categorias horizontal com scroll
      - Use flexDirection: 'row' e ScrollView horizontal
      - Destaque a categoria ativa com uma cor diferente

    PARTE B — Seção de "Produtos em destaque" (2 colunas)
      - Use flexDirection: 'row' + flexWrap: 'wrap'
      - Cada card deve ter width: '48%'
      - Badge de desconto no canto superior direito do card
        (use position: 'absolute', top: 8, right: 8)

    PARTE C — Resumo do carrinho no rodapé
      - Use justifyContent: 'space-between' + alignItems: 'center'
      - Ícone de quantidade de itens + valor total + botão

    Complete todos os TODOs marcados abaixo.

  DICA: Comece pelo item que achar mais fácil e avance.
        Tudo que precisar já foi praticado nos exercícios anteriores!
============================================================
*/

import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Carrinho } from "../../components/Carrinho.js";
import { Pessoa } from "../../components/Pessoa.js";
import { Produto } from "../../components/Produto.js";

// ── Dados de categorias ────────────────────────────────────
const categorias = ["Todos", "Bebidas", "Snacks", "Lácteos", "Orgânicos"];

// ── PARTE A: Barra de categorias ──────────────────────────
const BarraCategorias = ({ ativo, onSelecionar }) => {
  return (
    // TODO: use horizontal={true} no ScrollView e
    //       flexDirection: 'row' no container interno
    <ScrollView style={styles.scrollCategorias}>
      <View style={styles.containerCategorias}>
        {categorias.map((cat, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => onSelecionar(cat)}
            style={[
              styles.botaoCategoria,
              // TODO: destaque a categoria ativa com backgroundColor diferente
              cat === ativo && styles.botaoCategoriaAtivo,
            ]}
          >
            <Text
              style={[
                styles.textoCategoria,
                cat === ativo && styles.textoCategoriaAtivo,
              ]}
            >
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

// ── PARTE B: Card de produto com badge ───────────────────
const CardProdutoDestaque = ({ produto, desconto }) => {
  return (
    // TODO: defina a largura como '48%' para criar 2 colunas
    <View style={styles.cardDestaque}>
      {/* Placeholder de imagem do produto */}
      <View style={styles.imagemProduto}>
        <Text style={styles.emojiProduto}>🛒</Text>
      </View>

      {/* TODO (DESAFIO): adicione um badge de desconto no canto superior direito
          usando position: 'absolute', top: 8, right: 8
          Só exiba o badge se `desconto` existir */}

      <View style={styles.infoProduto}>
        <Text style={styles.nomeProdutoDestaque} numberOfLines={1}>
          {produto.nome}
        </Text>
        <Text style={styles.precoProdutoDestaque}>
          R$ {produto.preco.toFixed(2)}
        </Text>
        <TouchableOpacity style={styles.botaoAdicionar}>
          <Text style={styles.textoBotaoAdicionar}>+ Adicionar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// ── PARTE C: Rodapé do carrinho ───────────────────────────
const RodapeCarrinho = ({ carrinho }) => {
  return (
    // TODO: adicione flexDirection: 'row', justifyContent: 'space-between'
    //       e alignItems: 'center'
    <View style={styles.rodapeCarrinho}>
      {/* Ícone + quantidade */}
      <View style={styles.blocoIcone}>
        <Text style={styles.iconeCarrinho}>🛒</Text>
        <View style={styles.badge}>
          <Text style={styles.textoBadge}>{carrinho.itens.length}</Text>
        </View>
      </View>

      {/* Total */}
      <Text style={styles.totalRodape}>
        R$ {carrinho.calcularTotal().toFixed(2)}
      </Text>

      {/* Botão */}
      <TouchableOpacity style={styles.botaoVerCarrinho}>
        <Text style={styles.textoVerCarrinho}>Ver carrinho</Text>
      </TouchableOpacity>
    </View>
  );
};

// ── Tela principal ─────────────────────────────────────────
export default function Exercicio06() {
  const [categoriaAtiva, setCategoriaAtiva] =
    require("react").useState("Todos");

  const cliente = new Pessoa("Jackson Five", 38, "49 8800-5500");
  const carrinho = new Carrinho(cliente);
  carrinho.addProduto(new Produto("Chocolate", 10, 11));
  carrinho.addProduto(new Produto("Salgadinho", 15, 5));

  const produtos = [
    { produto: new Produto("Chocolate", 10, 11), desconto: "10%" },
    { produto: new Produto("Salgadinho", 15, 5), desconto: null },
    { produto: new Produto("Refrigerante", 5, 10), desconto: "5%" },
    { produto: new Produto("Suco de Laranja", 8, 20), desconto: null },
    { produto: new Produto("Biscoito", 6, 3), desconto: "15%" },
    { produto: new Produto("Iogurte", 9, 15), desconto: null },
  ];

  return (
    // TODO: adicione  flex: 1  para que o layout ocupe a tela toda
    <View style={styles.tela}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.tituloHeader}>🏪 Loja React Native</Text>
      </View>

      {/* Parte A: categorias */}
      <BarraCategorias
        ativo={categoriaAtiva}
        onSelecionar={setCategoriaAtiva}
      />

      {/* Parte B: grade de produtos */}
      {/* TODO: adicione  flex: 1  aqui para que a lista preencha o espaço */}
      <ScrollView contentContainerStyle={styles.listaProdutos}>
        <Text style={styles.secaoTitulo}>Produtos em Destaque</Text>
        {/* TODO: adicione flexDirection: 'row' e flexWrap: 'wrap' no containerGrade */}
        <View style={styles.containerGrade}>
          {produtos.map((item, i) => (
            <CardProdutoDestaque
              key={i}
              produto={item.produto}
              desconto={item.desconto}
            />
          ))}
        </View>
      </ScrollView>

      {/* Parte C: rodapé do carrinho */}
      <RodapeCarrinho carrinho={carrinho} />
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
    padding: 16,
    paddingTop: 48,
  },
  tituloHeader: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  // ── Categorias ────────────────────────────────────────
  scrollCategorias: {
    backgroundColor: "#fff",
    maxHeight: 52,
  },
  containerCategorias: {
    // TODO: adicione flexDirection: 'row' e padding: 8
  },
  botaoCategoria: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    backgroundColor: "#e3f2fd",
  },
  botaoCategoriaAtivo: {
    backgroundColor: "#1565c0",
  },
  textoCategoria: {
    color: "#1565c0",
    fontWeight: "600",
  },
  textoCategoriaAtivo: {
    color: "#fff",
  },

  // ── Grade de produtos ─────────────────────────────────
  listaProdutos: {
    padding: 12,
  },
  secaoTitulo: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#333",
  },
  containerGrade: {
    // TODO: adicione  flexDirection: 'row'  e  flexWrap: 'wrap'
    //       e gap: 10 (ou justifyContent: 'space-between')
  },
  cardDestaque: {
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 10,
    elevation: 2,
    // TODO: defina  width: '48%'
  },
  imagemProduto: {
    height: 100,
    backgroundColor: "#e3f2fd",
    justifyContent: "center",
    alignItems: "center",
  },
  emojiProduto: {
    fontSize: 36,
  },
  infoProduto: {
    padding: 10,
  },
  nomeProdutoDestaque: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 4,
  },
  precoProdutoDestaque: {
    fontSize: 16,
    color: "#2e7d32",
    fontWeight: "bold",
    marginBottom: 8,
  },
  botaoAdicionar: {
    backgroundColor: "#1565c0",
    borderRadius: 6,
    paddingVertical: 6,
    alignItems: "center",
  },
  textoBotaoAdicionar: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "bold",
  },

  // ── Rodapé do carrinho ────────────────────────────────
  rodapeCarrinho: {
    backgroundColor: "#fff",
    padding: 14,
    elevation: 10,
    // TODO: adicione  flexDirection: 'row'
    //                 justifyContent: 'space-between'
    //                 alignItems: 'center'
  },
  blocoIcone: {
    position: "relative",
  },
  iconeCarrinho: {
    fontSize: 28,
  },
  badge: {
    position: "absolute",
    top: -4,
    right: -8,
    backgroundColor: "#c62828",
    borderRadius: 10,
    minWidth: 18,
    height: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  textoBadge: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
  totalRodape: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1565c0",
  },
  botaoVerCarrinho: {
    backgroundColor: "#2e7d32",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 8,
  },
  textoVerCarrinho: {
    color: "#fff",
    fontWeight: "bold",
  },
});
