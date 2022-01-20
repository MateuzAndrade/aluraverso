import { ContaCorrente } from "./classes.js";
import { Cliente } from "./classes.js";

const client1 = new ContaCorrente ("Mateus", "00002","003333","2001",100,"Rua das Loucas");
const client2 = new ContaCorrente ("Bruna","0000245","000365","001216", 100,"Rua das Loucas");


client1.deposito(-200);
//client1.transferencia(300,client2);

console.log(client1);