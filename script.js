function ocultarmenu() {
  let menu = document.getElementById("menu");
  let botao = document.getElementById("botaomenu");

  // Alterna a classe "open" para abrir/fechar o menu
  menu.classList.toggle("open");

  // Se o menu está aberto, muda a cor do botão
  if (menu.classList.contains("open")) {
    botao.style.backgroundColor = "var(--secundary-color)"; // Cor quando aberto
    botao.style.backgroundImage = 'url("../imgs/symbols_menu_black.svg")';
  } else {
    botao.style.backgroundImage = 'url("../imgs/symbols_menu_red.svg")';
    botao.style.backgroundColor = "transparent"; // Cor quando fechado
  }
}
