document.addEventListener("DOMContentLoaded", function () {
  var estaNaSubpasta = window.location.pathname.includes("/routes/");

  var caminhoNavbar;
  if (estaNaSubpasta) {
    caminhoNavbar = "../navbar.html";
  } else {
    caminhoNavbar = "navbar.html";
  }

  fetch(caminhoNavbar)
    .then(function (barranavegacao) {
      return barranavegacao.text();
    })
    .then(function (conteudo) {
      document.getElementById("navbar").innerHTML = conteudo;
    });
});
