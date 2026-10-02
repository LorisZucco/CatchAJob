import {
  mostrarFormularioCandidato,
  obterDadosFormulario,
  mostrarResultados,
  mostrarMensagem,
  mostrarErroFormulario,
} from "./ui.js";

import {
  carregarVagas,
  salvarPerfil,
  carregarPerfil,
  limparPerfil,
} from "./dados.js";

import {
  criarVagas,
  filtrarVagasPorCategoria,
  encontrarMelhoresVagas,
  ordenarPorCompatibilidade,
  contarAnalise,
} from "./motor.js";

import { alterarTema, carregarTema } from "./tema.js";

const btnCandidato = document.getElementById("btn-candidato");
const btnReset = document.getElementById("btn-reset");
const btnTema = document.querySelector(".tema");

carregarTema();
// ========================================
// ANALISAR PERFIL
// ========================================

async function analisarPerfil(perfil) {
  if (
    !perfil ||
    !perfil.categoria ||
    !Array.isArray(perfil.habilidades) ||
    typeof perfil.experiencia !== "number"
  ) {
    mostrarMensagem(
      "Perfil inválido",
      "Os dados salvos não puderam ser utilizados. Clique em Começar novamente para cadastrar seu perfil.",
    );

    return;
  }

  // ========================================
  // CARREGA AS VAGAS
  // ========================================

  const dadosVagas = await carregarVagas();

  // ========================================
  // VERIFICA SE AS VAGAS FORAM CARREGADAS
  // ========================================

  if (dadosVagas.length === 0) {
    mostrarMensagem(
      "Não foi possível carregar as vagas",
      "Tente novamente mais tarde.",
    );

    return;
  }

  // ========================================
  // CRIA OS OBJETOS VAGA
  // ========================================

  const vagas = criarVagas(dadosVagas);

  // ========================================
  // FILTRA PELA CATEGORIA
  // ========================================

  const vagasCompativeis = filtrarVagasPorCategoria(vagas, perfil.categoria);

  // ========================================
  // VERIFICA SE EXISTEM VAGAS COMPATÍVEIS
  // ========================================

  if (vagasCompativeis.length === 0) {
    mostrarMensagem(
      "Nenhuma vaga encontrada",
      "Não encontramos vagas compatíveis com a sua categoria no momento.",
    );

    return;
  }
  const numeroAnalise = contarAnalise();

  console.log(`Análise número ${numeroAnalise} realizada nesta sessão.`);
  // ========================================
  // ANALISA SKILLS E EXPERIÊNCIA
  // ========================================

  const resultados = vagasCompativeis.map((vaga) => {
    return vaga.analisar(perfil.habilidades, perfil.experiencia);
  });

  // ========================================
  // ORDENA OS RESULTADOS
  // ========================================

  const resultadosOrdenados = ordenarPorCompatibilidade(resultados);

  // ========================================
  // ENCONTRA A MELHOR OU MELHORES VAGAS
  // ========================================

  const melhoresVagas = encontrarMelhoresVagas(resultadosOrdenados);

  // ========================================
  // MOSTRA NA INTERFACE
  // ========================================

  mostrarResultados(resultadosOrdenados, melhoresVagas);
}

// ========================================
// BOTÃO SOU CANDIDATO
// ========================================

btnCandidato.addEventListener("click", () => {
  mostrarFormularioCandidato();

  const form = document.getElementById("form-candidato");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const perfil = obterDadosFormulario();

    if (perfil.habilidades.length === 0) {
      mostrarErroFormulario(
        "Selecione pelo menos uma tecnologia ou ferramenta.",
      );

      return;
    }

    console.log("Perfil do candidato:");
    console.log(perfil);

    salvarPerfil(perfil);

    await analisarPerfil(perfil);
  });
});
// ========================================
// BOTÃO COMEÇAR NOVAMENTE
// ========================================

btnReset.addEventListener("click", () => {
  limparPerfil();

  window.location.reload();
});
// ========================================
// VERIFICAR PERFIL SALVO
// ========================================

const perfilSalvo = carregarPerfil();

if (perfilSalvo) {
  console.log("Perfil recuperado do LocalStorage:");
  console.log(perfilSalvo);

  analisarPerfil(perfilSalvo);
}
btnTema.addEventListener("click", () => {
  alterarTema();
});
