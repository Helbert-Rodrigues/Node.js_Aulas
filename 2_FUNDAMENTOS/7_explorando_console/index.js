// funcoes do "console.log".

const x = 10;
const y = "Algum Texto";
const z = [1, 2];

console.log(x, y, z);

// contagem de impressões

console.count(`O valor de x é ${x}, contagem`);
console.count(`O valor de x é ${x}, contagem`);
console.count(`O valor de x é ${x}, contagem`);
console.count(`O valor de x é ${x}, contagem`);

// variavel entre string
// o "%s" vai pegar o valor de y.
console.log(`O nome é %s, ele é programador`, y);

// limpar o console
// vai limpar o console depois de 2seg.
setTimeout(() => {
  console.clear();
}, 2000);
