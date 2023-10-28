const http = require("http"); // vamos chamar o modulo http.

const port = 3000; // Definir a porta.

const server = http.createServer((req, res) => {
  // criar um servidor com uma (req, res).
  const urlInfo = require("url").parse(req.url, true); // vamos parcear as informações do req pela url.
  const name = urlInfo.query.name; // usar a funcao do query buscando data pela var:name.

  res.statusCode = 200; // para funcionar...
  res.setHeader("contenty-type", "text/html"); // tipo de text (HTML).

  if (!name) {
    res.end(
      "<h1>Preencha o seu nome:</h1><form method='GET'><input type='text' name='name' /></form>"
    );
  } else {
    res.end(`<h1>Seja bem-vindo ${name}!</h1>`);
  }
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
// com o http criamos nosso server e alteramos a resposta baseado na URL acessada.
//com url processamos os parametros que vem pela query strig, para alterar a lógica do http.
