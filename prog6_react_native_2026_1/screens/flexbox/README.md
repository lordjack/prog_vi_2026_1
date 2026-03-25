# Exercícios de Flexbox — React Native

> **Pré-requisito:** os exercícios usam as classes `Pessoa`, `Produto` e `Carrinho`
> que já foram criadas em aula. Verifique que os arquivos abaixo existem:
> - `components/Pessoa.js`
> - `components/Produto.js`
> - `components/Carrinho.js`

---

## Como usar

Para testar cada exercício, abra `App.js` e troque o import da tela:

```js
// App.js
import Exercicio01 from "./screens/flexbox/Exercicio01_FlexDirection";
// troque o número para o exercício desejado

export default function App() {
  return <Exercicio01 />;
}
```

---

## Roteiro de Aulas

| Exercício | Arquivo | Conceito principal |
|---|---|---|
| 01 | `Exercicio01_FlexDirection.js` | `flexDirection` |
| 02 | `Exercicio02_JustifyContent.js` | `justifyContent` |
| 03 | `Exercicio03_AlignItems.js` | `alignItems` e `alignSelf` |
| 04 | `Exercicio04_FlexWrap.js` | `flexWrap` — grade de produtos |
| 05 | `Exercicio05_Flex.js` | `flex` — divisão proporcional |
| 06 | `Exercicio06_LayoutCompleto.js` | Integração de todos os conceitos |

---

## Resumo dos Conceitos

### `flexDirection`
Define o **eixo principal** dos filhos.
> ⚠️ No React Native o padrão é **`'column'`** (diferente do CSS web, que é `row`).

```js
flexDirection: 'row'           // →→→ lado a lado
flexDirection: 'column'        // ↓↓↓ empilhado (padrão no RN)
flexDirection: 'row-reverse'   // ←←← lado a lado invertido
flexDirection: 'column-reverse'// ↑↑↑ empilhado invertido
```

---

### `justifyContent`
Alinha os filhos ao longo do **eixo principal**.

```js
justifyContent: 'flex-start'    // começo (padrão)
justifyContent: 'flex-end'      // fim
justifyContent: 'center'        // centro
justifyContent: 'space-between' // bordas + espaço distribuído
justifyContent: 'space-around'  // espaço ao redor de cada filho
justifyContent: 'space-evenly'  // espaço igual entre todos
```

---

### `alignItems`
Alinha os filhos ao longo do **eixo secundário** (cruzado).

```js
alignItems: 'stretch'    // preenche (padrão)
alignItems: 'flex-start' // início do eixo cruzado
alignItems: 'flex-end'   // fim do eixo cruzado
alignItems: 'center'     // centro do eixo cruzado
alignItems: 'baseline'   // linha de base do texto
```

`alignSelf` faz o mesmo, mas em um **filho individual** (sobrescreve o pai).

---

### `flexWrap`
Controla se os filhos **quebram de linha** quando estão cheios.

```js
flexWrap: 'nowrap'  // sem quebra (padrão)
flexWrap: 'wrap'    // quebra para a próxima linha
```

Combinado com `flexDirection: 'row'` cria **grades responsivas**.

---

### `flex`
Define quanto **espaço proporcional** um filho ocupa.

```js
// Filho A tem flex: 1, filho B tem flex: 2
// → A ocupa 33%, B ocupa 66% do espaço disponível
```

> O **pai** precisa ter `flex: 1` (ou altura definida) para que funcione.

---

## Gabarito rápido (principais TODOs)

<details>
<summary>Exercício 01</summary>

```js
containerItem: {
  flexDirection: 'row',
  // ...
},
nome: {
  flex: 1,        // ocupa todo o espaço restante
},
// Adicionar abaixo do bloco row:
<Text>Estoque: {produto.estoque} un</Text>
```
</details>

<details>
<summary>Exercício 02</summary>

```js
rodape: {
  flexDirection: 'row',
  justifyContent: 'space-between',
},
barraBotoes: {
  flexDirection: 'row',
  justifyContent: 'space-between', // ou space-around / space-evenly
},
```
</details>

<details>
<summary>Exercício 03</summary>

```js
containerCard: {
  flexDirection: 'row',
  alignItems: 'center',
},
tag: {
  alignSelf: 'flex-start',
},
```
</details>

<details>
<summary>Exercício 04</summary>

```js
grade: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: 10,
},
card: {
  width: '48%',     // 2 colunas
  // width: '31%',  // 3 colunas (desafio)
},
// Desafio B:
const corEstoque = (estoque) => {
  if (estoque > 10) return '#2e7d32';
  if (estoque > 0)  return '#f57c00';
  return '#c62828';
};
```
</details>

<details>
<summary>Exercício 05</summary>

```js
tela:     { flex: 1, ... },
conteudo: { flex: 1, padding: 16 },
```
</details>

<details>
<summary>Exercício 06</summary>

```js
tela:            { flex: 1 },
containerCategorias: { flexDirection: 'row', padding: 8 },
containerGrade:  { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
cardDestaque:    { width: '48%' },
rodapeCarrinho:  { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
// Badge de desconto (position absolute):
<View style={{ position: 'absolute', top: 8, right: 8, backgroundColor: '#c62828', borderRadius: 12, padding: 4 }}>
  <Text style={{ color: '#fff', fontSize: 10 }}>{desconto}</Text>
</View>
```
</details>
