export class Pessoa {
  constructor(nome, idade, telefone) {
    this.nome = nome;
    this.idade = idade;
    this.telefone = telefone;
  }

  // Lança exceção apenas se menor de idade
  verificarIdade() {
    if (this.idade < 18) {
      throw this.nome + " - pessoa menor de idade";
    }
    console.log(this.nome + " - pessoa de maior");
  }

  exibirDados() {
    console.log("Nome: " + this.nome);
    console.log("Idade: " + this.idade);
    console.log("Telefone: " + this.telefone);
  }
}
