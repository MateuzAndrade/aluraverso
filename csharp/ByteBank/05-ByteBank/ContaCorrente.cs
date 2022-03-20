namespace _05_ByteBank 
{
    public class ContaCorrente
    {
        public Cliente? titular;
        public int agencia;
        public int numeroConta;
        public double saldo;

        public bool Sacar(Double valor)
        {
            if (this.saldo < valor)
            {
                return false;
            }
            else
            {
                this.saldo -= valor;
                return true;
            }
        }

        public void Depositar(double valor)
        {
            if (valor > 0)
            {
                this.saldo += valor;

            }
            else
            {
                Console.WriteLine("Deposito de numero negativo não é valido");
            }
        }

        public bool Transfererir(double valor, ContaCorrente contaDestino)
        {
            if (this.saldo >= valor)
            {
                return false;
            }
            else
            {
                this.saldo -= valor;
                contaDestino.Depositar(valor);
                return true;
            }
        }
    }

}