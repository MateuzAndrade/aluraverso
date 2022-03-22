
using ByteBankPOO2.Funcionarios;

namespace ByteBankPOO2
{
    class Program
    {
        static void Main (string[] args)
        {
            Funcionario carlos = new Funcionario();

            carlos.Nome = "Carlos";
            carlos.CPF = "123.456.789-00";
            carlos.Salario = 3000;

            

        }
    }
}