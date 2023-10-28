const fs = require("fs");

if (!fs.existsSync("./minhapasta")) {
  console.log("Não existe!");
}

fs.mkdirSync("./minhapasta");

if (fs.existsSync("./minhapasta")) {
  console.log("Existe!");
}

// O método "exists" pode evidenciar se um diretório existe ou não.
// "mkdir" Pode criar um diretório.
// "if(!fs.existsSync('./minhapasta'))" Está perguntando sé existe essa pasta no diretorio atual.
