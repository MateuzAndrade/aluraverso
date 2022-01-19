function Cliente (nome, idade, cpf, email, endereco) {

    this.nome = nome,
    this.idade = idade,
    this.cpf = cpf,
    this.email = email,
    this.endereco = endereco;
}

const mateus = new Cliente ("mateus","25","00000","aaaaa","aaa");

console.log(mateus);