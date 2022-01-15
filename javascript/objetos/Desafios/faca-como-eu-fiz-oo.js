class Cliente {
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

    

}