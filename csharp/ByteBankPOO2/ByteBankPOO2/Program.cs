
using ByteBankPOO2.Colaboradores;

namespace ByteBankPOO2
{
    class Program
    {
        static void Main (string[] args)
        {
            Funcionario.Funcionario carlos = new Funcionario.Funcionario();

            carlos.Nome = "Carlos";
            carlos.CPF = "123.456.789-00";
            carlos.Salario = 3000;

            Diretor jose = new Diretor();

            jose.Nome = "Jose";
            Console.WriteLine(jose.Nome);



        }
    }
}