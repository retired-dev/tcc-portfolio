class Usuario {
  #senha;

  constructor(nome, email, senha) {
    this.nome = nome;
    this.email = email;
    this.#senha = senha;
  }

  autenticar(senhaInformada) {
    return this.#senha === senhaInformada;
  }

  trocarEmail(novoEmail) {
    this.email = novoEmail;
  }
}

const usuario = new Usuario("Ana", "ana@email.com", "1234");
console.log(usuario.autenticar("1234")); // Retorna “true”
