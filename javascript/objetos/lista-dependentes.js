const cliente = {
    nome:"Mateus",
    idade: 26,
    CPF: "123456789000",
    email: "contato@mateusdev.com.br",
    fones:["5583999999","5583999999"],
    dependentes:[{
        nome:"Sara",
        parentesco:"filha",
        dataNascimento:"20/03/2011"   
    }]

}

cliente.dependentes.push({
    nome:"Samia Maria",
    parentesco:"filha",
    dataNascimento:"04/01/2014"
});

//console.log(cliente);
//console.log(cliente.dependentes[1]);

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNascimento==="04/01/2014")

console.log(filhaMaisNova[0].nome);