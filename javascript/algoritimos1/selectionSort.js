const livros = require ('./listalivros');
const menorValor = require('./menorValor')

for (let atual = 0; atual < livros.length; atual++) {
    let menor = menorValor(livros, atual)

    let livroAtual = livros[atual];

    let livroMenorPreco = livros[menor];

    livros[atual] = livroMenorPreco;
    livros[menor] = livroAtual
    
}