export class Cliente {
    constructor (nome, cpf, agencia, endereco){
        this.Nome = nome,
        this.Cpf = cpf,
        this.Agencia = agencia,
        this.Endereco = endereco
    }


}

export class ContaCorrente extends Cliente {
    constructor (nome, cpf, agencia,conta,_SaldoCC, endereco){
        super (nome, cpf, agencia,endereco)
        this.Conta = conta,
        this._SaldoCC = _SaldoCC;
    }

    deposito (valor) {
        if ( valor <= 0 ) {
            return;
    }
        this._SaldoCC += valor;
    }

    saque (valor) {
        if (this._SaldoCC >= valor) {
            this._SaldoCC -= valor;
            return valor;
    }}

    transferencia (valor, conta){
        const valorSacado = this.saque(valor);
        conta.deposito(valorSacado)
    }

}