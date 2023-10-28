const path = require("path");

console.log(path.resolve("teste.txt"));
// "resolve" é possivel saber qual o path(caminho) completo até o arquivo alvo.

const midFolder = "relatorios";
const filename = "Helbert.txt";

const finalPath = path.join("/", "arquivo", midFolder, filename);
console.log(finalPath);
// "join" é possivel formar um path dinâmico, com variável e valores fixos (vai unir).
