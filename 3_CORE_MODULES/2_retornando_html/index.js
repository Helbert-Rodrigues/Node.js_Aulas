const http = require("http");

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200; //significa que a conexão foi bem sucedida.
  res.setHeader("contenty-type", "text/html"); //"contenty-type"(tipo de conexão), que vai ser html.
  res.end(
    "<h1>Olá, este é meu primeiro server com html!<h1><p>Testando atualização</p>"
  );
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
