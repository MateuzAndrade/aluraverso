 public class ContaCorrente
{
    public string? titular;
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
}

