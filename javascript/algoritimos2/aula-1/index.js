const {
    edFolha,
    edGalho
} = require('./arrays');

function juntaListas(lista1, lista2) {

    let listaFinal = [];
    let posicaoLista1 = 0;
    let posicaoLista2 = 0;
    let atual = 0;

    while (posicaoLista1 < lista1.length && posicaoLista2 < lista2.length) {
        let produtoAtualLista1 = lista1[posicaoLista1];
        let produtoAtualLista2 = lista2[posicaoLista2];

        if (produtoAtualLista1.preco < produtoAtualLista2.preco) {
            listaFinal[atual] = produtoAtualLista1;
            posicaoLista1++;
        } else {
            listaFinal[atual] = produtoAtualLista2;
            posicaoLista2++;
        }
        atual++;
    }
    while (posicaoLista1 < lista1.length) {
        listaFinal[atual] = lista1[posicaoAtualLista1];
        posicaoLista1++;
        atual++
    };

    
    while (posicaoLista2 < lista2.length) {
        listaFinal[atual] = lista2[posicaoAtualLista2];
        posicaoLista2++;
        atual++
    };

    return listaFinal;
}

console.log(juntaListas(edGalho, edFolha));