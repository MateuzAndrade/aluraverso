Console.WriteLine("Executando o Projeto 12 - Calculo de Rendimento Poupança com For em Anos");

double valorInvestido;
valorInvestido = 1000;

double fatorDeRendimento = 1.0036;

for (int contadorAno = 1;contadorAno  <= 5; contadorAno ++)
{
    for (int contadorDeMes = 1; contadorDeMes <= 12; contadorDeMes++)
    {
        valorInvestido *=  fatorDeRendimento;
    }
    fatorDeRendimento += 0.0010;
}

Console.WriteLine(valorInvestido); 

Console.WriteLine("A Execução Terminou!");
Console.ReadLine();