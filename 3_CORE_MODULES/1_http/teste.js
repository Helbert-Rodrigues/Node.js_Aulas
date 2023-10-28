const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
  // normalmente quando trabalhamos na web tem uma requisição(req) e uma resposta(res).

  res.write("OI HTTP"); // Escrevi(write) uma resposta(res) pro usuário.
  res.end(); // e finalizo a resposta.
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
}); //para podermos executar isso devemos escutar a porta.
// aproveitamos e colocamos um calback pra vermos no terminal sé está tudo funcionando.
