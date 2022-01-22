import chalk from 'chalk';
import * as fs from 'fs';


function pegaArquivo (caminhoDoArquivo) {
    const encoding = "utf8";
    fs.readFile (caminhoDoArquivo, encoding, (_, texto) => {
        console.log(chalk.green(texto));
    } )
}

pegaArquivo("./arquivos/texto1.md");