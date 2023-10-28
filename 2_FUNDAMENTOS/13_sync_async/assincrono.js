const fs = require("fs");

console.log("Inicio");

fs.writeFile("arquivo.txt", "OI", function (err) {
  setTimeout(function () {
    console.log("Arquivo Criado!!");
  }, 1000);
});

console.log("Fim");
// "assíncrona" o codigo continua progredindo e em um ponto futuro.(não espera a função ser realizada).
