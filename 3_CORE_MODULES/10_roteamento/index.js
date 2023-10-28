const http = require("http");
const fs = require("fs");
const url = require("url");

const port = 3000;

const server = http.createServer((req, res) => {
  const q = url.parse(req.url, true);
  const filename = q.pathname.substring(1);

  if (filename.includes("html")) {
    if (fs.existsSync(filename)) {
      fs.readFile(filename, function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    } else {
      fs.readFile("404.html", function (err, data) {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    }
  }
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
//"q" vai ser o query(é uma solicitação de informações a um banco de dados.) da url.
// "pathname" = Um caminho, a forma geral do nome de um arquivo ou diretório.
// "substring(1)" Vai pegar do segundo caracter pra frente. o nome do arquivo.
// "filename"=(nome do arquivo).
// 'if (filename.includes("html"))' só vai entrar nesse if sé o arquivo for "html".
// " if (fs.existsSync(filename))" vai conferir sé o arquivo existe ou não.
