function alterarTema() {
  document.body.classList.toggle("tema-escuro");

  const temaEscuroAtivo = document.body.classList.contains("tema-escuro");

  if (temaEscuroAtivo) {
    localStorage.setItem("tema", "escuro");
  } else {
    localStorage.setItem("tema", "claro");
  }
}

function carregarTema() {
  const temaSalvo = localStorage.getItem("tema");

  if (temaSalvo === "escuro") {
    document.body.classList.add("tema-escuro");
  }
}

export { alterarTema, carregarTema };
