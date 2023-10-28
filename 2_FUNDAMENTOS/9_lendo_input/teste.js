const readline = require("readline").createInterface({
  input: process.stdin, // pra ter a entrada de dados
  output: process.stdout, // pra a saída de dados.
});
readline.question("Qual sua idade?", (idade) => {
  if (idade <= 17) {
    console.log(`Não pode entrar, Menor de idade: ${idade}`);
  } else console.log(`Pode entrar: ${idade}`);
  readline.close();
});
