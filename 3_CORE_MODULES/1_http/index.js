const http = require("http");
// aqui cria a porta
const port = 3000;
// "createServer" cria o servidor.
const server = http.createServer((req, res) => {
  res.write("Oi HTTP");
  res.end();
});
// "req": significa requisição // "res": resposta
server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
}); //para ser executado precisamos escutar a porta
// no terminal você deve apertar "ctrl + c" para parar a aplicação.
// aqui só está retornando texto no servidor.
