class Cliente {
    constructor (nome,email,cpf,saldo){
        this.nome = nome,
        this.email = email,
        this.cpf = cpf,
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += valor;
    }

    saque(valor) {
        this.saldo -= valor;
    }

    exibirSaldo(){
        console.log(this.saldo);
    }
}

class ClientePoupanca extends Cliente {
    constructor(nome, email, cpf, saldo, saldoPoupanca){
        super(nome, email, cpf, saldo)
        this.saldoPoupanca = saldoPoupanca
    }
    depositarPoupanca(valor){
        this.saldoPoupanca += valor;
    }
}

const Mateus = new ClientePoupanca ("Mateus","contato@email.com","1245684",100 ,150);

console.log(Mateus);

Mateus.depositar(50);
Mateus.depositarPoupanca(100);

console.log(Mateus);
