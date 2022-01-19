export class ClienteCC {
    constructor (nome, cpf, agencia, conta,_saldo, enderenco){
        this.Nome = nome,
        this.Cpf = cpf,
        this.Agencia = agencia,
        this.Conta = conta,
        this._Saldo = _saldo,
        this.Enderenco = enderenco
    }

    deposito (valor) {
        if ( valor > 0) {
            this._Saldo += valor;
            return console.log(`Olá ${this.Nome} você realizou um deposito de R$${valor} seu saldo atual é de R$${this._Saldo}`);
        } else {
            console.error("ERRO NÃO SE DEPOSITA NÚMERO NEGATIVO");
        }
    }

    saque (valor) {
        if (valor <= this._Saldo) {
            this._Saldo -= valor;
            return console.log(`Olá ${this.Nome} você realizou um saque de R$${valor} seu saldo atual é de R$${this._Saldo}`);
        } else {
            console.error("Saldo Insuficiente");
        }
    }

    exibirSaldo (){
        console.log(this._Saldo);
    }
}
