const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200; // haverá um modulo pra falar sobre o "statusCode".
  res.setHeader("Contenty-Type", "text/html"); // vai mudar o hider da aplicação para o tipo "html"
  res.end("<h1>Olá, este é um texto html pelo 'server'</h1>"); // agora podemos enviar textos para o navegador como "html".
});

server.listen(port);
