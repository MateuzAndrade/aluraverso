const alunos = ['Paulo', 'Bia', 'Vivian', 'Isabela'];
const mediasDoAlunos = [10, 7, 9, 6];

let listaDeNotasEAlunos = [alunos, mediasDoAlunos];

const exibeNomeNota = (nomeDoAluno) => {

    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) {
        indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        return listaDeNotasEAlunos[0][indice] + " ,sua média é " + listaDeNotasEAlunos[1][indice] + ".";
    } else {
        return "Aluno não está cadastrado."
    }
}

const resultado = (nota) => {
    if (listaDeNotasEAlunos[1][indice] >= 7) {
        return "APROVADO"

    } else {
        return "REPROVADO"
    }
}

console.log(exibeNomeNota("Vivian"), resultado(exibeNomeNota));