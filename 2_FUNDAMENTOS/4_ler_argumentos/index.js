// Node.js permite envio de argumentos via linha de comando.
//  Os argumentos ficam em um array chamado "process.argv".
console.log("Resultado do process.argv:", process.argv);

const args = process.argv.slice(2);

console.log(args);

const nome = args[0].split("=")[1]; //vai pegar o primeiro argumneto depois do "=".
// vai pegar o primeiro argumento depois do "=".
console.log(nome);
