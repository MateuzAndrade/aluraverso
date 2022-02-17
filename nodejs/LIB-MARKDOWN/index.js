import chalk from 'chalk';
import * as fs from 'fs';

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'Não existe arquivo neste caminho'));
}

function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf8';
    fs.promises.readFile()
}

// function pegaArquivo(caminhoDoArquivo) {
//     const encoding = "utf8";
//     fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//         if (erro) {
//             trataErro(erro)
//         }
//         console.log(chalk.blueBright(texto));
//     })
// }

pegaArquivo("./arquivos/texto1.md");