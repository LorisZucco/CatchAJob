import { mostrarFormularioCandidato, obterDadosFormulario } from "./ui.js";

const btnCandidato = document.getElementById("btn-candidato");

btnCandidato.addEventListener("click", () => {
  mostrarFormularioCandidato();

  const form = document.getElementById("form-candidato");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const perfil = obterDadosFormulario();

    console.log("Perfil do candidato:");
    console.log(perfil);
  });
});
import { carregarVagas } from "./dados.js";
import { criarVagas } from "./motor.js";

async function testarMotor() {
  const dados = await carregarVagas();

  console.log("Dados vindos do JSON:");
  console.log(dados);

  const vagas = criarVagas(dados);

  console.log("Vagas transformadas em objetos Vaga:");
  console.log(vagas);
}

testarMotor();
