const listaLivros = require('./array');

function ordenar(parte1, parte2) {
    let posicaoAtualParte1 = 0;
    let posicaoAtualParte2 = 0;
    const resultado = [];

    while (posicaoAtualParte1 < parte1.length && posicaoAtualParte2 < parte2.length) {
        let produtoAtualParte1 = parte1[posicaoAtualParte1];
        let produtoAtualParte2 = parte2[posicaoAtualParte2];

        if (produtoAtualParte1.preco < produtoAtualParte2.preco) {
            resultado.push(produtoAtualParte1);
            posicaoAtualParte1++;
        } else {
            resultado.push(produtoAtualParte2);
            posicaoAtualParte2++;

        }
    }
    return resultado.concat(posicaoAtualParte1 < parte1.length ? parte1.slice(posicaoAtualParte1) : parte2.slice(posicaoAtualParte2));

}

function mergeSorte(array) {
    if (array.length > 1) {
        const metade = Math.floor(array.length / 2);
        const parte1 = mergeSorte(array.slice(0, metade));
        const parte2 = mergeSorte(array.slice(metade, array.length));

        array = ordenar(parte1, parte2);
    }
    return array;
}

console.log(mergeSorte(listaLivros));