const minimist = require("minimist");
// "require" vai chamar o modulo que acabamos de baixar "minimist".
const args = minimist(process.argv.slice(2));

console.log(args);
// vai buscar os argumentos da minha constante "args" que pega o que eu digitar no terminal pelo "process.argv".
// E coloquei a regra pelo "slice(2)" que vai pegar só o meu segundo argumento Ex: 0-node 1-./index.js 2-"Helbert".

console.log(args);

const nome = args["nome"]; // vai pegar o argumento nome e colocar uma constante.

console.log(nome);

const profissao = args["profissao"]; // vai pegar o que está dentro da "--profissao".

console.log(profissao);

//no terminal = node ./index.js --nome=Helbert --profissao=Programador

console.log("O nome dele é:", nome, "A profissao de é:", profissao);
