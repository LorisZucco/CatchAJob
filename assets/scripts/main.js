// ========================================
// IMPORTAÇÕES DA INTERFACE
// ========================================

import {
  mostrarFormularioCandidato,
  obterDadosFormulario,
  mostrarResultados,
  mostrarMensagem,
  mostrarErroFormulario,
} from "./ui.js";

// ========================================
// IMPORTAÇÕES DE DADOS
// ========================================

import {
  carregarVagas,
  salvarPerfil,
  carregarPerfil,
  limparPerfil,
} from "./dados.js";

// ========================================
// IMPORTAÇÕES DO MOTOR DE COMPATIBILIDADE
// ========================================

import {
  criarVagas,
  filtrarVagasPorCategoria,
  encontrarMelhoresVagas,
  ordenarPorCompatibilidade,
  contarAnalise,
  recomendarEstudos,
} from "./motor.js";

// ========================================
// IMPORTAÇÕES DO TEMA
// ========================================

import { alterarTema, carregarTema } from "./tema.js";

// ========================================
// IMPORTAÇÕES DO CLIMA
// ========================================

import { carregarClima } from "./clima.js";

// ========================================
// ELEMENTOS DA PÁGINA
// ========================================

const btnCandidato = document.getElementById("btn-candidato");

const btnReset = document.getElementById("btn-reset");

const btnTema = document.querySelector(".tema");

// ========================================
// CARREGAR TEMA SALVO
// ========================================

carregarTema();

// ========================================
// CARREGAR CLIMA
// ========================================

carregarClima();

// ========================================
// ANALISAR PERFIL DO CANDIDATO
// ========================================

async function analisarPerfil(perfil) {
  // ========================================
  // VALIDAR PERFIL
  // ========================================

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
  // MOSTRAR ESTADO DE CARREGAMENTO
  // ========================================

  mostrarMensagem(
    "Carregando vagas...",
    "Aguarde enquanto analisamos as melhores oportunidades para o seu perfil.",
  );

  // ========================================
  // INTERVALO PARA EXIBIR O CARREGAMENTO
  // ========================================

  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  // ========================================
  // CARREGAR VAGAS DO JSON
  // ========================================

  const dadosVagas = await carregarVagas();

  // ========================================
  // VERIFICAR ERRO NO CARREGAMENTO
  // ========================================

  if (dadosVagas === null) {
    mostrarMensagem(
      "Erro ao carregar as vagas",
      "Não foi possível carregar as vagas. Tente novamente mais tarde.",
    );

    return;
  }

  // ========================================
  // VERIFICAR CATÁLOGO VAZIO
  // ========================================

  if (dadosVagas.length === 0) {
    mostrarMensagem(
      "Nenhuma vaga disponível",
      "Não existem vagas cadastradas no momento.",
    );

    return;
  }

  // ========================================
  // TRANSFORMAR DADOS EM OBJETOS VAGA
  // ========================================

  const vagas = criarVagas(dadosVagas);

  // ========================================
  // FILTRAR VAGAS PELA CATEGORIA
  // ========================================

  const vagasCompativeis = filtrarVagasPorCategoria(vagas, perfil.categoria);

  // ========================================
  // VERIFICAR SE EXISTEM VAGAS COMPATÍVEIS
  // ========================================

  if (vagasCompativeis.length === 0) {
    mostrarMensagem(
      "Nenhuma vaga encontrada",
      "Não encontramos vagas compatíveis com a sua categoria no momento.",
    );

    return;
  }

  // ========================================
  // CONTABILIZAR ANÁLISE COM CLOSURE
  // ========================================

  const numeroAnalise = contarAnalise();

  console.log(`Análise número ${numeroAnalise} realizada nesta sessão.`);

  // ========================================
  // ANALISAR HABILIDADES E EXPERIÊNCIA
  // ========================================

  const resultados = vagasCompativeis.map((vaga) => {
    return vaga.analisar(perfil.habilidades, perfil.experiencia);
  });

  // ========================================
  // ORDENAR POR COMPATIBILIDADE
  // ========================================

  const resultadosOrdenados = ordenarPorCompatibilidade(resultados);

  // ========================================
  // ENCONTRAR MELHOR OU MELHORES VAGAS
  // ========================================

  const melhoresVagas = encontrarMelhoresVagas(resultadosOrdenados);

  // ========================================
  // GERAR RECOMENDAÇÕES DE ESTUDO
  // ========================================

  const recomendacoes = recomendarEstudos(resultadosOrdenados);

  // ========================================
  // MOSTRAR RESULTADOS NA INTERFACE
  // ========================================

  mostrarResultados(resultadosOrdenados, melhoresVagas, recomendacoes);
}

// ========================================
// BOTÃO "SOU CANDIDATO"
// ========================================

btnCandidato.addEventListener("click", () => {
  // Exibe o formulário do candidato

  mostrarFormularioCandidato();

  const form = document.getElementById("form-candidato");

  // ========================================
  // ENVIO DO FORMULÁRIO
  // ========================================

  form.addEventListener("submit", async (event) => {
    // Impede o recarregamento padrão da página

    event.preventDefault();

    // ========================================
    // OBTER DADOS DO FORMULÁRIO
    // ========================================

    const perfil = obterDadosFormulario();

    // ========================================
    // VALIDAR HABILIDADES
    // ========================================

    if (perfil.habilidades.length === 0) {
      mostrarErroFormulario(
        "Selecione pelo menos uma tecnologia ou ferramenta.",
      );

      return;
    }

    // ========================================
    // SALVAR PERFIL NO LOCALSTORAGE
    // ========================================

    salvarPerfil(perfil);

    // ========================================
    // ANALISAR PERFIL
    // ========================================

    await analisarPerfil(perfil);
  });
});

// ========================================
// BOTÃO "COMEÇAR NOVAMENTE"
// ========================================

btnReset.addEventListener("click", () => {
  // Remove apenas o perfil salvo

  limparPerfil();

  // Recarrega a aplicação

  window.location.reload();
});

// ========================================
// BOTÃO "ALTERAR TEMA"
// ========================================

btnTema.addEventListener("click", () => {
  alterarTema();
});

// ========================================
// VERIFICAR PERFIL SALVO AO INICIAR
// ========================================

const perfilSalvo = carregarPerfil();

if (perfilSalvo) {
  analisarPerfil(perfilSalvo);
}
