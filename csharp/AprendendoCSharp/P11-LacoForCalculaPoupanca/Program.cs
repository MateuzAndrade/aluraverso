Console.WriteLine("Executando o Projeto 11 - Calculo de Rendimento Poupança com For");

double valorInvestido;
valorInvestido = 1000;

double fatorDeRendimento = 0.36 / 100;


for (int contadorDeMes = 1; contadorDeMes <= 12; contadorDeMes++)
{
    valorInvestido *= valorInvestido + (valorInvestido * fatorDeRendimento);
    Console.WriteLine(valorInvestido);
}


Console.WriteLine("A Execução Terminou!");
Console.ReadLine();
