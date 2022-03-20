
ContaCorrente contaDoLulu = new ContaCorrente();

contaDoLulu.titular = "Luciano";
contaDoLulu.saldo = 150;

bool resultadoSaque = contaDoLulu.Sacar(200);
Console.WriteLine(resultadoSaque);


Console.WriteLine(contaDoLulu.saldo);

contaDoLulu.Depositar(-500);
Console.WriteLine(contaDoLulu.saldo);

ContaCorrente contaDaLucia = new ContaCorrente();
contaDaLucia.titular = "Lucia";

Console.WriteLine("Saldo da Lulu " + contaDoLulu.saldo);


bool resultadoTransferencia = contaDoLulu.Transfererir(200, contaDaLucia);

Console.WriteLine("Saldo da Lulu: " + contaDoLulu.saldo);
Console.WriteLine("Saldo da Lucia: " + contaDaLucia.saldo);
Console.WriteLine("Resultado da Transferencia: " + resultadoTransferencia);
