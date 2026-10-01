import {
  mostrarFormularioCandidato,
  obterDadosFormulario,
  mostrarResultados,
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
} from "./motor.js";

const btnCandidato = document.getElementById("btn-candidato");
const btnReset = document.getElementById("btn-reset");
// ========================================
// ANALISAR PERFIL
// ========================================

async function analisarPerfil(perfil) {
  // Carrega as vagas do JSON
  const dadosVagas = await carregarVagas();

  // Transforma os dados em objetos da classe Vaga
  const vagas = criarVagas(dadosVagas);

  // Filtra pelas categorias compatíveis
  const vagasCompativeis = filtrarVagasPorCategoria(vagas, perfil.categoria);

  // Analisa habilidades e experiência
  const resultados = vagasCompativeis.map((vaga) => {
    return vaga.analisar(perfil.habilidades, perfil.experiencia);
  });

  // Ordena da maior compatibilidade para a menor
  const resultadosOrdenados = ordenarPorCompatibilidade(resultados);

  // Encontra uma ou mais melhores vagas
  const melhoresVagas = encontrarMelhoresVagas(resultadosOrdenados);

  // Exibe na página
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

    // Pega os dados preenchidos
    const perfil = obterDadosFormulario();

    console.log("Perfil do candidato:");
    console.log(perfil);

    // Salva no LocalStorage
    salvarPerfil(perfil);

    // Executa toda a análise
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
