namespace _07_ByteBank
{
    class Program
    {
        static void Main (string[] args)
        {
            ContaCorrente conta = new ContaCorrente(3658,5269);
            Console.WriteLine(conta.Agencia);
            Console.WriteLine(conta.NumeroConta);

            Console.WriteLine(ContaCorrente.TotalDeContasCriadas);
        }

       
    }
}