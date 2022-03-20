
namespace _05_ByteBank
{
    class Program
    {
        static void Main(string[] args)
        {
            Cliente gabriela = new Cliente();

            gabriela.nome = "Gabriela";
            gabriela.profissao = "Desenvolvedora C#";
            gabriela.cpf = "123.456.789-00";

            ContaCorrente conta = new ContaCorrente();

            conta.titular = gabriela;

            Console.WriteLine(gabriela.nome);
            Console.WriteLine(conta.titular.nome);


        }
    }
}