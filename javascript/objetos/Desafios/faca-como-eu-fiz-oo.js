class cliente {
    constructor (nome, cpf, telefone, email, endereco, saldo){
        this.nome = nome,
        this.cpf = cpf,
        this.telefone = telefone,
        this.email = email,
        this.endereco = endereco
        this.saldo = saldo;
    }

    depositar (valor) {
        this.saldo += valor;
    }

    saque (valor) {
        this.saldo -= valor;
    }

    exibirSaldo () {
        console.log(this.saldo);
    }

}

const Mateus = new cliente ("Mateus","00001","000001547","contato@email.com","Rua das Quantas",100);

console.log(Mateus);

class clientePoup extends cliente {
    constructor (nome,cpf,endereco,email,saldo,saldoPoup){
        super(nome,cpf,email,saldo)
    this.saldoPoup = saldoPoup;
}
}