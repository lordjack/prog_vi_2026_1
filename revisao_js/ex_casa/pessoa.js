export class Pessoa {
  constructor(nome, idade, telefone) {
    this.nome = nome;
    this.idade = idade;
    this.telefone = telefone;
  }

  verificarIdade() {
    if (this.idade < 18) {
      throw this.nome + " - pessoa menor de idade";
    } else {
      throw this.nome + " - pessoa de maior";
    }
  }
}
