const url = require("url"); // chamou o modulo url
const address = "https://www.meusite.com.br/catalogo?produtos=cadeira"; // definimos o edereço.
const parsedUrl = new url.URL(address); // url decomposta

console.log(parsedUrl.host); // É o site "www.meusite.com.br".

console.log(parsedUrl.pathname); // Pagina que ele está (Ex: catalogo).

console.log(parsedUrl.search); // O que está pesquisando nesta página (Ex: produtos=cadeiras).

console.log(parsedUrl.searchParams); // é o url parametos (Ex: produtos => cadeiras).

console.log(parsedUrl.searchParams.get("produtos"));
