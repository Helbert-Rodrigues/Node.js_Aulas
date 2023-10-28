const url = require("url");
const address = "http://www.meusite.com.br/catalog?produtos=cadeira";
const parsedUrl = new url.URL(address); // vai pegar a url já importada com o metodo "URL" todo em maiusculo com a variavel da url EX:(address).

console.log(parsedUrl.host);
console.log(parsedUrl.pathname);
console.log(parsedUrl.search);
console.log(parsedUrl.searchParams);
console.log(parsedUrl.searchParams.get("produtos"));
