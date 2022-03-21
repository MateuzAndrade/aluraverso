namespace _07_ByteBank 
{
    public class ContaCorrente
    {
        public Cliente? Titular { get; set; }
        public int Agencia { get; set; }
        public int NumeroConta { get; set; }

        private double _saldo = 100;

        public double Saldo
        {
            get 
            { 
                return _saldo; 
            }
            set
            {
                if (value < 0)
                {
                    return;
                }
                else
                {
                    _saldo = value;
                }

            }
        }

        public static int TotalDeContasCriadas 

        { 
            get;private set;
        }

        public ContaCorrente(int Agencia, int NumeroConta)
        {
            this.Agencia = Agencia;
            this.NumeroConta = NumeroConta;

            TotalDeContasCriadas++;
        }

        public bool Sacar(Double valor)
        {
            if (_saldo < valor)
            {
                return false;
            }
            else
            {
                _saldo -= valor;
                return true;
            }
        }

        public void Depositar(double valor)
        {
            if (valor > 0)
            {
                _saldo += valor;

            }
            else
            {
                Console.WriteLine("Deposito de numero negativo não é valido");
            }
        }

        public bool Transfererir(double valor, ContaCorrente contaDestino)
        {
            if (_saldo >= valor)
            {
                return false;
            }
            else
            {
                _saldo -= valor;
                contaDestino.Depositar(valor);
                return true;
            }
        }
    }

}