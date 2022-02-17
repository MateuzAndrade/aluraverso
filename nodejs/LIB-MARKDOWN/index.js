import chalk from 'chalk';
import * as fs from 'fs';

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'Não existe arquivo neste caminho'));
}

async function pegaArquivo(caminhoDoArquivo){
    const encoding ='utf8'
    try{
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
    console.log(chalk.green(texto));}
    catch(erro){
        trataErro(erro)
    }
}

// function pegaArquivo(caminhoDoArquivo) {
//     const encoding = 'utf8';
//     fs.promises
//     .readFile(caminhoDoArquivo, encoding)
//     .then((texto) => chalk.green(console.log(texto)))
//     .catch((erro)=> trataErro(erro))
// }

// function pegaArquivo(caminhoDoArquivo) {
//     const encoding = "utf8";
//     fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//         if (erro) {
//             trataErro(erro)
//         }
//         console.log(chalk.blueBright(texto));
//     })
// }

pegaArquivo("./arquivos/");