let anoAtual = new Date().getFullYear();

let clientes = {
    nomes: "José",
    dataDeNascimento: "08/12/1995",
    idade: anoAtual - 1995,
    contatos : [
        {
        tel:"8398855664422"},
        {
            email: "jose@contato.com.br"}
        ]
}

console.log(clientes);