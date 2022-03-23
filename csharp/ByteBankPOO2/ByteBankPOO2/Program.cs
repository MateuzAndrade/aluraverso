
using ByteBankPOO2.Funcionarios;

namespace ByteBankPOO2
{
    class Program
    {
        static void Main (string[] args)
        {
            Funcionarios.Funcionarios carlos = new Funcionarios.Funcionarios();

            carlos.Nome = "Carlos";
            carlos.CPF = "123.456.789-00";
            carlos.Salario = 3000;

            Diretor jose = new Diretor();

            jose.Nome = "Jose";
            Console.WriteLine(jose.Nome);

            

        }
    }
}