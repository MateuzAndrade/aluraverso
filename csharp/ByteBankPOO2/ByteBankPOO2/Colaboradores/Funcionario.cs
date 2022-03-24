using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ByteBankPOO2.Colaboradores
{
    public class Funcionario
    {
        public static int TotalDeFuncionarios { get; private set; }
        public string? Nome { get; set; }
        public string? CPF { get; set; }
        public double Salario { get; set; }

        public Funcionario()
        {
            TotalDeFuncionarios++;
        }


        public double GetBonificacao()
        { 

            return Salario*0.10;

        }
    }
}
