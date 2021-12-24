const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];


const sala1 = nomes.slice(0,nomes.length/2);
const sala2 = nomes.slice(nomes.length/2);
console.log(`Alunos da sala 1 ${sala1}. total de alunos matriculados ${sala1.length}.`);
console.log(`Alunos da sala 2 ${sala2}. total de alunos matriculados ${sala2.length}.`);
console.log(`Total de alunos matriculados nas duas turmas ${sala1.length + sala2.length}.`);