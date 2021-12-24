const notas = [10, 7, 8, 5, 10];
notas.pop();//pop palavra reservada para deletar itens de arrays
console.log(notas);

let media = (notas[0]+notas[1]+notas[2]+notas[3])/notas.length;
console.log(`a média é ${media}`);