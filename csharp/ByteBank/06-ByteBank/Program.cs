namespace _06_ByteBank
{
    class Program
    {
        static void Main(string[] args)
        {
            ContaCorrente conta = new ContaCorrente();

            conta.Saldo = -80;

            Console.WriteLine(conta.Saldo);

            Console.ReadLine();
        }
    }
}