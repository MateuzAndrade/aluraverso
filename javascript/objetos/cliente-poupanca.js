function Cliente (nome, idade, cpf, email,saldo) {

    this.nome = nome,
    this.idade = idade,
    this.cpf = cpf,
    this.email = email,
    this.saldo = saldo;
    this.depositar = function (valor) {
        this.saldo +=  valor
    }

}

function ClientePoupanca (nome,idade,cpf,email,saldo,saldoPoup){
    Cliente.call(this,nome,idade, cpf, email,saldo)
    this.saldoPoup = saldoPoup
}

const mateus = new ClientePoupanca("Mateus","26","0000000000","contato@email.com",100,200);

console.log(mateus);