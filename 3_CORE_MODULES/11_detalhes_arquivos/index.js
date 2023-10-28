const fs = require("fs");

fs.stat("novoarquivo.txt", (err, stat) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(stats.isFile()); // É um Arquivo?
  console.log(stats.isDirectory()); // É um diretorio?
  console.log(stats.isSymbolicLink()); // É um link simbolico?
  console.log(stats.ctime); // Data de criação
  console.log(stats.size); // Número de bites do arquivo.
});

// Utilizando o método "stat" de fs temos informações de: tamanho, data de criação, se é arquivo ou diretório...
