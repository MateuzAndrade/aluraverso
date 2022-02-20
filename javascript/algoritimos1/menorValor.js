const livros = require ("./listalivros");

let maisBarato = 0;

function menorValor(arrProdutos, poisicaoInicial){

    let maisBarato = poisicaoInicial;

    for (let atual = poisicaoInicial; atual < arrProdutos.length; atual++) {
        if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
            maisBarato = atual;
        }   
        }
        return maisBarato
}


module.exports = menorValor;
