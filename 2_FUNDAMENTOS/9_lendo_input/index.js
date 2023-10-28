const readline = require("readline").createInterface({
  input: process.stdin, // pra ter a entrada de dados
  output: process.stdout, // pra a saída de dados.
});

readline.question("Qual a sua linguagem preferida?", (language) => {
  // aqui vai ser usado o "stdin" pra entrada.
  console.log(`A minha linguagem preferida é: ${language}`); // aqui vai ser usado o "stdout" de saída.
  readline.close(); // "Close()" serve para fechar o programa
});
