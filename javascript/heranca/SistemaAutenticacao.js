export class SistemaAutenticacao {
    static login(funcionario, senha) {
        return funcionario._senha == senha;
    }
}