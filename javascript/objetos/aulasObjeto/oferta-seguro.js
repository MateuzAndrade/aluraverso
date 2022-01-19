const cliente = {
    nome:"Mateus",
    idade: 26,
    CPF: "123456789000",
    email: "contato@mateusdev.com.br",
    fones:["5583999999","5583999999"],
    dependentes:[
        {
        nome:"Sara",
        parentesco:"filha",
        dataNascimento:"20/03/2011"},
    {
        nome:"Samia Maria",
        parentesco:"filha",
        dataNascimento:"04/01/2014" },
    ],
    saldo:100,
    depositar: function(valor)
    {
        this.saldo += valor
    }
}


function oferSeguro(obj) {

    const propsClientes = Object.keys(obj);
    if (propsClientes.includes("dependentes")) {
        console.log(`Oferta de Seguro de Vida para ${obj.nome}`);
    }
}

console.log(Object.entries(cliente));
oferSeguro(cliente);
