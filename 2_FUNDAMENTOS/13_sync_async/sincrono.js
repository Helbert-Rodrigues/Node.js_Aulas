const fs = require("fs");
// "fs" serve para trabalhar com arquivo.

console.log("Início");

fs.writeFileSync("arquivo.txt", "Helbert"); //
// "fs.writeFileSync()" essa função da a ordem que a proxima linha deve esperar ela ser executada.
console.log("Fim");
// O "Fim" só pode ser executado depois de ser criado um arquivo com meu nome.
// "Sincrono" o código espera ser totalmente executado para prosseguir.
