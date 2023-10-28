const inquirer = require("inquirer"); // o "require" vai resgatar o modulo "inquirer" que acabamos de baixar !(o node_modules mostra as dependencias dele).

inquirer
  .prompt([
    {
      name: "p1",
      message: "Qual a primeira nota?",
    },
    {
      name: "p2",
      message: "Qual a segunda nota?",
    },
  ])
  .then((answers) => {
    console.log(answers);
  })
  .catch((err) => console.log(err));

// o "prompt" vai ser responsavel para fazer as perguntas e colocando um "array[]" pode-se fazer mais de uma pergunta.
// O "catch" serve para imprimir algum erro que venha acontecer.
// caso esteja tudo certo ele vai pro "then".
// "answers" significa as respostas.
// o inquirer vai resgatar e lidar com o imput do usuário.
