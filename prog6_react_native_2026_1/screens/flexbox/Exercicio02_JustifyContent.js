/*
============================================================
  EXERCÍCIO 02 — justifyContent
============================================================

  CONCEITO:
    `justifyContent` distribui os filhos ao longo do EIXO PRINCIPAL.
    Valores mais usados:
      'flex-start'    → agrupados no início (padrão)
      'flex-end'      → agrupados no final
      'center'        → centralizados
      'space-between' → primeiro e último nas bordas, resto distribuído
      'space-around'  → espaço igual ao redor de cada filho
      'space-evenly'  → espaço igual entre todos (inclusive bordas)

  TAREFA:
    Você tem a barra de totais de um carrinho de compras.
    Ela deve exibir as informações dos itens num layout horizontal.

    1. No campo `rodape`, use justifyContent: 'space-between'
       para que "Itens: X" fique à esquerda e "Total: R$" à direita.

    2. No campo `barraBotoes`, experimente cada valor de justifyContent
       para ver como os 3 botões se distribuem.

    3. DESAFIO: Crie um novo componente `LinhaResumo` que receba
       `label` e `valor` e use justifyContent: 'space-between'
       para exibir cada linha do resumo do carrinho.

  RESULTADO ESPERADO (rodapé):
    ┌──────────────────────────────────────┐
    │  Itens: 3               Total: R$30 │
    └──────────────────────────────────────┘

  RESULTADO ESPERADO (barra de botões com space-between):
    ┌──────────────────────────────────────┐
    │  [Limpar]   [Cupom]   [Finalizar]   │
    └──────────────────────────────────────┘
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

// ── Componente de rodapé do carrinho ──────────────────────
const RodapeCarrinho = ({ carrinho }) => {
  return (
    // TODO: adicione  justifyContent: 'space-between'  e flexDirection: 'row'
    <View style={styles.rodape}>
      <Text style={styles.textoRodape}>Itens: {carrinho.itens.length}</Text>
      <Text style={styles.textoRodape}>
        Total: R$ {carrinho.calcularTotal().toFixed(2)}
      </Text>
    </View>
  );
};

// ── Barra de botões de ação ────────────────────────────────
const BarraBotoes = () => {
  return (
    // TODO: experimente cada valor de justifyContent aqui:
    //   'flex-start' | 'flex-end' | 'center'
    //   'space-between' | 'space-around' | 'space-evenly'
    <View style={styles.barraBotoes}>
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textoBotao}>Limpar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.botao, { backgroundColor: "#f57c00" }]}>
        <Text style={styles.textoBotao}>Cupom</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.botao, { backgroundColor: "#2e7d32" }]}>
        <Text style={styles.textoBotao}>Finalizar</Text>
      </TouchableOpacity>
    </View>
  );
};

// ── Tela principal ─────────────────────────────────────────
export default function Exercicio02() {
  const cliente = new Pessoa("Jackson Five", 38, "49 8800-5500");
  const carrinho = new Carrinho(cliente);

  carrinho.addProduto(new Produto("Chocolate", 10, 11));
  carrinho.addProduto(new Produto("Salgadinho", 15, 5));
  carrinho.addProduto(new Produto("Refrigerante", 5, 10));

  return (
    <ScrollView contentContainerStyle={styles.tela}>
      <Text style={styles.titulo}>Exercício 02 — justifyContent</Text>

      {/* Lista de itens */}
      {carrinho.itens.map((item, i) => (
        <View key={i} style={styles.itemLista}>
          <Text>{item.nome}</Text>
          <Text>R$ {item.preco.toFixed(2)}</Text>
        </View>
      ))}

      {/* Rodapé com total */}
      <RodapeCarrinho carrinho={carrinho} />

      {/* Barra de ações */}
      <BarraBotoes />
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
  itemLista: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 12,
    marginBottom: 6,
    borderRadius: 6,
  },
  rodape: {
    backgroundColor: "#1565c0",
    padding: 14,
    borderRadius: 8,
    marginTop: 10,
    // TODO: adicione flexDirection e justifyContent aqui
  },
  textoRodape: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
  barraBotoes: {
    flexDirection: "row",
    marginTop: 12,
    // TODO: troque o valor de justifyContent e observe a diferença
    justifyContent: "flex-start",
  },
  botao: {
    backgroundColor: "#1565c0",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 6,
  },
  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
  },
});
