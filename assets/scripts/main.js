import {
  mostrarFormularioCandidato,
  obterDadosFormulario,
  mostrarResultados,
} from "./ui.js";

import { salvarPerfil, carregarVagas } from "./dados.js";

import { criarVagas, encontrarMelhorVaga } from "./motor.js";

const btnCandidato = document.getElementById("btn-candidato");

btnCandidato.addEventListener("click", () => {
  mostrarFormularioCandidato();

  const form = document.getElementById("form-candidato");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    // Pega os dados preenchidos pelo candidato
    const perfil = obterDadosFormulario();

    console.log("Perfil do candidato:");
    console.log(perfil);

    // Salva o perfil no LocalStorage
    salvarPerfil(perfil);

    // Carrega as vagas do arquivo JSON
    const dadosVagas = await carregarVagas();

    console.log("Vagas vindas do JSON:");
    console.log(dadosVagas);

    // Transforma os objetos do JSON em objetos da classe Vaga
    const vagas = criarVagas(dadosVagas);

    console.log("Vagas transformadas em objetos Vaga:");
    console.log(vagas);

    // Analisa a compatibilidade do candidato com cada vaga
    // Analisa a compatibilidade com todas as vagas
    const resultados = vagas.map((vaga) => {
      return vaga.analisar(perfil.habilidades);
    });

    console.log("Resultados da análise:");
    console.log(resultados);

    // Encontra a vaga com maior compatibilidade
    const melhorVaga = encontrarMelhorVaga(resultados);

    console.log("Melhor vaga:");
    console.log(melhorVaga);

    // Envia os resultados para a interface
    mostrarResultados(resultados, melhorVaga);
  });
});
