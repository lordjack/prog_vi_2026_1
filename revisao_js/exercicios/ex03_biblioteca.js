/*
 * Exercício 03 — Sistema de Biblioteca
 *
 * Crie a classe Livro com os atributos: titulo, autor e disponivel (boolean).
 *   - O livro começa sempre disponível (disponivel = true)
 *
 * Crie a classe Emprestimo com os atributos:
 *   - pessoa  → objeto do tipo Pessoa (quem está pegando o livro)
 *   - livro   → objeto do tipo Livro  (qual livro está sendo emprestado)
 *
 * Implemente os métodos:
 *   - realizarEmprestimo() → se o livro NÃO estiver disponível, lança uma exceção.
 *                            Caso contrário, muda disponivel para false
 *                            e exibe uma mensagem de confirmação.
 *   - devolverLivro()      → muda disponivel de volta para true
 *                            e exibe uma mensagem de devolução.
 *
 * No programa principal:
 *   - Crie 2 leitores (objetos Pessoa) e 2 livros (objetos Livro)
 *   - Simule o fluxo: empréstimo → tentativa de novo empréstimo do mesmo livro
 *     → devolução → empréstimo bem-sucedido novamente
 *   - Use try/catch em cada operação de empréstimo
 */

import { Pessoa } from "../pessoa.js";

class Livro {
  constructor(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
    this.disponivel = true; // começa disponível
  }
}

// Emprestimo — associação entre Pessoa e Livro
class Emprestimo {
  constructor(pessoa, livro) {
    this.pessoa = pessoa; // objeto do tipo Pessoa
    this.livro = livro; // objeto do tipo Livro
  }

  realizarEmprestimo() {
    if (!this.livro.disponivel) {
      throw (
        'O livro "' +
        this.livro.titulo +
        '" não está disponível para empréstimo.'
      );
    }
    this.livro.disponivel = false;
    console.log(
      this.pessoa.nome +
        ' pegou emprestado "' +
        this.livro.titulo +
        '" de ' +
        this.livro.autor,
    );
  }

  devolverLivro() {
    this.livro.disponivel = true;
    console.log(this.pessoa.nome + ' devolveu "' + this.livro.titulo + '"');
  }
}

// ---- Programa principal ----

let leitor1 = new Pessoa("Fernando Costa", 20, "11944444444");
let leitor2 = new Pessoa("Gabriela Nunes", 19, "11955555555");

let livro1 = new Livro("Clean Code", "Robert C. Martin");
let livro2 = new Livro("O Hobbit", "J.R.R. Tolkien");

let emprestimo1 = new Emprestimo(leitor1, livro1);
let emprestimo2 = new Emprestimo(leitor2, livro1); // mesmo livro!
let emprestimo3 = new Emprestimo(leitor2, livro2);

// Fernando pega Clean Code
try {
  emprestimo1.realizarEmprestimo();
} catch (error) {
  console.log(error);
}

// Gabriela tenta pegar o mesmo livro — livro indisponível
try {
  emprestimo2.realizarEmprestimo();
} catch (error) {
  console.log(error);
}

// Gabriela pega O Hobbit
try {
  emprestimo3.realizarEmprestimo();
} catch (error) {
  console.log(error);
}

// Fernando devolve Clean Code
emprestimo1.devolverLivro();

// Gabriela tenta novamente — agora está disponível
try {
  emprestimo2.realizarEmprestimo();
} catch (error) {
  console.log(error);
}
