/*
============================================================
  EXERCÍCIO 03 — alignItems e alignSelf
============================================================

  CONCEITO:
    `alignItems` alinha filhos no EIXO SECUNDÁRIO (cruzado).
    Quando flexDirection é 'row', o eixo secundário é vertical.
    Quando flexDirection é 'column', o eixo secundário é horizontal.

    Valores:
      'flex-start'  → início do eixo cruzado
      'flex-end'    → fim do eixo cruzado
      'center'      → centro do eixo cruzado
      'stretch'     → preenche todo o eixo cruzado (padrão)
      'baseline'    → alinha pela linha de base do texto

    `alignSelf` faz a mesma coisa, mas em um filho individual,
    sobrescrevendo o alignItems do pai.

  TAREFA:
    Você tem um card de perfil de cliente (Pessoa).
    O card usa flexDirection: 'row' (avatar + dados).

    1. Adicione alignItems: 'center' no `containerCard` para
       centralizar o avatar verticalmente em relação aos dados.

    2. No componente `TagIdade`, use alignSelf para posicionar
       a tag:
         - alignSelf: 'flex-start'  → alinha à esquerda
         - alignSelf: 'flex-end'    → alinha à direita
         - alignSelf: 'center'      → centraliza

    3. DESAFIO: Mude a altura `altura` do avatar no estilo e observe
       como o alignItems: 'center' mantém o alinhamento vertical.

  RESULTADO ESPERADO:
    ┌────────────────────────────────────────┐
    │        ┌──────┐                        │
    │        │  JF  │  Jackson Five          │
    │        │      │  49 8800-5500          │
    │        └──────┘  ┌────────────┐        │
    │                  │  38 anos   │        │
    │                  └────────────┘        │
    └────────────────────────────────────────┘
============================================================
*/

import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Pessoa } from "../../components/Pessoa.js";

// ── Iniciais do nome para o avatar ────────────────────────
const iniciais = (nome) =>
  nome
    .split(" ")
    .slice(0, 2)
    .map((p) => p[0].toUpperCase())
    .join("");

// ── Tag de idade ───────────────────────────────────────────
const TagIdade = ({ idade }) => {
  const cor = idade < 18 ? "#c62828" : "#1565c0";
  return (
    // TODO: adicione  alignSelf: 'flex-start'  (ou 'flex-end' / 'center')
    <View style={[styles.tag, { backgroundColor: cor }]}>
      <Text style={styles.textoTag}>{idade} anos</Text>
    </View>
  );
};

// ── Card de cliente ────────────────────────────────────────
const CardCliente = ({ pessoa }) => {
  return (
    <View style={styles.containerCard}>
      {/* Avatar circular */}
      <View style={styles.avatar}>
        <Text style={styles.textoAvatar}>{iniciais(pessoa.nome)}</Text>
      </View>

      {/* Dados do cliente */}
      <View style={styles.dados}>
        <Text style={styles.nome}>{pessoa.nome}</Text>
        <Text style={styles.telefone}>{pessoa.telefone}</Text>
        <TagIdade idade={pessoa.idade} />
      </View>
    </View>
  );
};

// ── Tela principal ─────────────────────────────────────────
export default function Exercicio03() {
  const clientes = [
    new Pessoa("Jackson Five", 38, "49 8800-5500"),
    new Pessoa("Chaves", 8, "49 9900-1234"),
    new Pessoa("Ana Clara Souza", 25, "49 7700-9988"),
  ];

  return (
    <ScrollView contentContainerStyle={styles.tela}>
      <Text style={styles.titulo}>Exercício 03 — alignItems / alignSelf</Text>
      {clientes.map((c, i) => (
        <CardCliente key={i} pessoa={c} />
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
  containerCard: {
    flexDirection: "row",
    // TODO: adicione  alignItems: 'center'  aqui
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    elevation: 2,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#1565c0",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  textoAvatar: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  dados: {
    flex: 1,
  },
  nome: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 2,
  },
  telefone: {
    fontSize: 13,
    color: "#666",
    marginBottom: 6,
  },
  tag: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 20,
    // TODO: troque o alignSelf aqui e observe como o comportamento muda
    // alignSelf: 'flex-start',
  },
  textoTag: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
});
