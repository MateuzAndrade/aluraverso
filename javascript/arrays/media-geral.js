const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function mediaSala(notasDaSala) {

    const somaDasNotas = notasDaSala.reduce((acum, atual) => atual + acum, 0);
    return somaDasNotas/notasDaSala.length;
}

console.log(`Média da sala de JavaScript ${mediaSala(salaJS)}`);
console.log(`Média da sala de Java ${mediaSala(salaJava)}`);
console.log(`Média da sala de Python ${mediaSala(salaPython)}`);

//Média geral da Sala

const salasUnificadastotal = salaJS.concat(salaJava,salaPython);

console.log(salasUnificadastotal);

console.log(`Média das salas é de ${mediaSala(salasUnificadastotal)}`);


//juntando conceitos do inicio das aulas

const notas = [10, 6.5, 8, 7.5];

function media (notasDosAlunos) {

    const somandotudo = notasDosAlunos.reduce((acumu, indice) => indice + acumu,0);
    return somandotudo/notasDosAlunos.length;
}

console.log(media(notas))