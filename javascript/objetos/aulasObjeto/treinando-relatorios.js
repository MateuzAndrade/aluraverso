let anoAtual = new Date().getFullYear();

let clientes = {
    nome: "José",
    dataDeNascimento: "08/12/1995",
    idade: anoAtual - 1995,
    contatos : [
        {
        tel:"8398855664422"},
        {
            email: "jose@contato.com.br"}
        ]
}

let relatorio ="";

for ( let info in clientes){
    if (typeof clientes === "object" || typeof clientes === "function") {
        continue
    }else{
        relatorio += `${info} - ${clientes[info]}`        
    }
}


console.log(relatorio);