const cliente = {
    nome:"Mateus",
    idade: 26,
    CPF: "123456789000",
    email: "contato@mateusdev.com.br",
    fones:["5583999999","5583999999"]
}

cliente.dependentes = {
    nome:"Sara",
    parentesco:"filha",
    dataNascimento:"20/03/2011"
}

console.log(cliente);

cliente.dependentes.nome = "Sara Silva"

console.log(cliente);