const fs = require("fs");
// "fs":file system (serve para trabalhar com arquivos ou diretorios ex: o "arquivo.txt")
// "require" OU "import" => vai pegar aquele framework que nos vamos utilizar ex: "fs".
fs.readFile("arquivo.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});
// "readFile"=(Ler arquivo): Vai colocar o nome do arquivo EX.:(arquivo.txt), depois (utf-8) pra acentuação.
// você pode criar uma function pra pegar os "erros" (err), e os "dados" (data).
