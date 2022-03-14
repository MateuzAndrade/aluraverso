Console.WriteLine("Executando o Projeto 10 - Calculo de Rendimento Poupança");

double valorInvestido;
valorInvestido = 1000;

double fatorDeRendimento = 0.36 / 100;

int contadorDeMes;
contadorDeMes = 1;

while (contadorDeMes <= 12)
{
    valorInvestido = valorInvestido + (valorInvestido * fatorDeRendimento);
    contadorDeMes++;
    Console.WriteLine(valorInvestido);
}

Console.WriteLine("Após " + contadorDeMes + "meses você terá R$ " + valorInvestido);


Console.WriteLine("A Execução Terminou!");
Console.ReadLine();
