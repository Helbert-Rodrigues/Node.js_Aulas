const http = require("http");
const fs = require("fs");

const port = 3000;

const server = http.createServer((req, res) => {
  fs.readFile("teste.html", function (err, data) {
    // nesta linha estamos buscando o arquivo "teste.html" e abrimos uma "function" usando caso de "err"(erro), "data"(dados).
    res.writeHead(200, { "Content-Type": "text/html" }); // usamos duas funcao em uma "200" para deixar td funcionando e o tipo de saída.
    res.write(data); // para mostrar os dados.
    return res.end(); // para finalizar.
  });
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
