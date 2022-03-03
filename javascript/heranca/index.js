import { Gerente } from "./funcionarios/Gerente.js";
import { Diretor } from "./funcionarios/diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";


const diretor = new Diretor("Rodrigo", 10000, 1234564789);
diretor.cadastrarSenha("123456789");
const gerente = new Gerente("Ricardao", 5000, 1346479846);

const estalogado = SistemaAutenticacao.login(diretor, "123456789");

console.log( estalogado );