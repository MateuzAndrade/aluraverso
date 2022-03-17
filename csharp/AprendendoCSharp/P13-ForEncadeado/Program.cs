Console.WriteLine("Executando o Projeto 13 - Laços Encadeados");

for (int contadorLinha = 0; contadorLinha < 10; contadorLinha++)
{
    for (int contadorColuna = 0; contadorColuna < 10; contadorColuna++)
    {
        Console.Write("*");

        if (contadorColuna >= contadorLinha)
        {
            break;
        }
    }
    Console.WriteLine();
       
}


Console.WriteLine("A Execução Terminou!");
Console.ReadLine();