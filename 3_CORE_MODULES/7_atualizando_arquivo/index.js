const http = require("http");
const fs = require("fs");
const url = require("url");

const port = 3000;

const server = http.createServer((req, res) => {
  const urlInfo = require("url").parse(req.url, true);
  const name = urlInfo.query.name;

  if (!name) {
    fs.readFile("index.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  } else {
    const nameNewLine = name + "\r\n"; // "nameNewLine" vai adicionando uma linha a cada nome "= name" é onde vai buscar "\r\n" significa que uma quebra de linha vai acontecer independente do SO.
    //",\r\n" significa que vai salvar com quebra de linha e com uma vígula.
    fs.appendFile("arquivo.txt", nameNewLine, function (err, data) {
      // O "appendFile" vai permitir nos escrevermos quantos nomes quisermos.
      res.writeHead(302, {
        location: "/",
      });
      return res.end();
    });
  }
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
