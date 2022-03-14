Console.WriteLine("Executando projeto 9");

int idadedoJoao = 16;
int quantidadeDePessoas = 2;
bool acompanhado = true;
string mensagemAdicional;

if (acompanhado == true)
{
    mensagemAdicional = "João está acompanhado!";
}
else
{
    mensagemAdicional = "João não está acompanhado";
}

if (idadedoJoao >= 18 || quantidadeDePessoas >= 2)
{
    Console.WriteLine("Acesso Liberado");
    Console.WriteLine(mensagemAdicional);
}
else
{
    Console.WriteLine("Acesso Negado");
}

Console.WriteLine("A execuçaõ terminou");
Console.ReadLine();