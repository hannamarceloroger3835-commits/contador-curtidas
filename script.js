const botaocurtir = document.getElementById("botao-curtir");
const botaozerar = document.getElementById("botao-zerar");
const textocurtidas = document.getElementById("curtidas");
const textoMensagem = document.getElementById("mensagem");

let curtidas = 0;
function atualizartela() {
  textocurtidas.textContent = curtidas;
  if (curtidas >= 10) {
    textoMensagem.textContent = " Seu post viralizou!";
  } else {
    textoMensagem.textContent = "";
  }
}

botaocurtir.addEventListener("click", function () {
  curtidas = curtidas + 1;
  atualizartela();
});

botaozerar.addEventListener("click", function () {
  curtidas = 0;
  atualizartela();
});
