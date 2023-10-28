const path = require("path");

const custompath = "/relatorios/Helbert/Relatiro.pdf";

console.log(path.dirname(custompath)); // nome do diretorio.
console.log(path.basename(custompath)); // nome do arquivo.
console.log(path.extname(custompath)); // nome da extenção.

// "path" extrai diversas informações sobre caminhos e arquivos: (nome do arquivo, nome do diretório, extensão).
