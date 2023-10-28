// externo
// (npm install minimist).
const minimist = require("minimist"); //ajuda a pegar meus argumentos no terminal

// interno
const soma = require("./soma").soma;

const args = minimist(process.argv.slice(2));

const a = parseInt(args["a"]);
const b = parseInt(args["b"]);

soma(a, b);

// o que tem no terminal =  node ./index.js --a=8 --b=10.
