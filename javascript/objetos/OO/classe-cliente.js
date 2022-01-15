class Cliente {
    constructor(nome,email,cpf,saldo){
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

const mateus = new Cliente("Mateus","contato@email.com","0000001",100);

console.log(mateus);

mateus.exibirSaldo();

mateus.depositar(50);

console.log(mateus);

mateus.saque(150);

mateus.exibirSaldo();