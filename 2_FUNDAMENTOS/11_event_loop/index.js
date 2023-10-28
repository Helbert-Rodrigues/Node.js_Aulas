// O "Event loop" executa uma linha por vez.
function a() {
  console.log("Executando a()");
}

function b() {
  console.log("Executando b()");
}

function c() {
  console.log("Executando c()");
  b();
  a();
}

c();
// primeiro ele executa o "C" e dentro da função do msm são executado o "B" e "A".
