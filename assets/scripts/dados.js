async function carregarVagas() {
  try {
    const response = await fetch("./assets/data/vagas.json");

    if (!response.ok) {
      console.error("Não foi possível carregar o arquivo de vagas.");
      return [];
    }

    const vagas = await response.json();

    return vagas;
  } catch (error) {
    console.error("Ocorreu um erro ao carregar as vagas:", error);

    return [];
  }
}
// Cria a função de carregar as vagas, trata possivel erro de caso nao encontre devolve um alert na tela, e para nao retornar undefined ele retorna um array vazio após a mensagem de que nao foi possível carregar as vagas e o erro que ocorreu.

function salvarPerfil(perfil) {
  if (!perfil) {
    return;
  }

  localStorage.setItem("skillMatchProfile", JSON.stringify(perfil));
}
// cria função de salvar o perfil como json, no LocalStorage.

function carregarPerfil() {
  const perfilSalvo = localStorage.getItem("skillMatchProfile");

  if (!perfilSalvo) {
    return null;
  }

  try {
    const perfil = JSON.parse(perfilSalvo);

    return perfil;
  } catch (error) {
    console.error("Erro ao carregar o perfil salvo:", error);

    localStorage.removeItem("skillMatchProfile");

    return null;
  }
}
// cria a função de carregar o perfil, e verifica se não há perfil retorna nulo. para ser tratado pelo main.js
function limparPerfil() {
  localStorage.removeItem("skillMatchProfile");
}
export { carregarVagas, salvarPerfil, carregarPerfil, limparPerfil };

//exporta as funções relacionadas a cima
