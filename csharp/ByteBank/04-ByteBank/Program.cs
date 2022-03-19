
ContaCorrente contaDoLulu = new ContaCorrente();

contaDoLulu.titular = "Luciano";
contaDoLulu.saldo = 150;

bool resultadoSaque = contaDoLulu.Sacar(200);
Console.WriteLine(resultadoSaque);


Console.WriteLine(contaDoLulu.saldo);