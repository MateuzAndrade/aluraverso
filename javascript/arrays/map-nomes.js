let nomes = ["ana Julia", " Caio vinicius", "BIA silva"];
// não pode ser const pois os valores serão alterados

const nomesAtualizados = nomes.map( nomes => nomes.toLocaleUpperCase());

console.log(nomesAtualizados);

const nomesMinusculos = nomes.map ( nomes => nomes.toLocaleLowerCase());

console.log(nomesMinusculos);

const novafuncion = nomes.map ( nomes => nomes.trim());

console.log(novafuncion);