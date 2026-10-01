import {
  mostrarFormularioCandidato,
  obterDadosFormulario,
  mostrarResultados,
} from "./ui.js";

import { salvarPerfil, carregarVagas } from "./dados.js";

import {
  criarVagas,
  filtrarVagasPorCategoria,
  encontrarMelhorVaga,
} from "./motor.js";

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

    // Transforma os dados do JSON em objetos da classe Vaga
    // Transforma os dados do JSON em objetos da classe Vaga
    const vagas = criarVagas(dadosVagas);

    console.log("Categoria do candidato:");
    console.log(perfil.categoria);

    console.log("Categorias das vagas:");
    console.log(vagas.map((vaga) => vaga.categoria));

    // Filtra as vagas pela categoria do candidato
    const vagasCompativeis = filtrarVagasPorCategoria(vagas, perfil.categoria);

    console.log("Vagas compatíveis com a categoria:");
    console.log(vagasCompativeis);

    // Analisa as habilidades somente das vagas compatíveis
    const resultados = vagasCompativeis.map((vaga) => {
      return vaga.analisar(perfil.habilidades, perfil.experiencia);
    });

    console.log("Resultados da análise:");
    console.log(resultados);

    // Encontra a melhor vaga
    const melhorVaga = encontrarMelhorVaga(resultados);

    console.log("Melhor vaga:");
    console.log(melhorVaga);

    // Mostra os resultados
    mostrarResultados(resultados, melhorVaga);
  });
});
