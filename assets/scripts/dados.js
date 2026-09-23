async function carregarVagas() {
  try {
    const response = await fetch("./assets/data/vagas.json");

    if (!response.ok) {
      alert("Não foi possível carregar as vagas.");
      return [];
    }

    const vagas = await response.json();

    return vagas;
  } catch (error) {
    alert("Ocorreu um erro ao carregar as vagas.");
    console.error(error);

    return [];
  }
}
// Cria a função de carregar as vagas, trata possivel erro de caso nao encontre devolve um alert na tela, e para nao retornar undefined ele retorna um array vazio após a mensagem de que nao foi possível carregar as vagas e o erro que ocorreu.

function salvarPerfil(perfil) {
  localStorage.setItem("perfil", JSON.stringify(perfil));
}
// cria função de salvar o perfil como json, no LocalStorage.

function carregarPerfil() {
  const perfilSalvo = localStorage.getItem("perfil");

  if (perfilSalvo === null) {
    return null;
  }

  return JSON.parse(perfilSalvo);
}
// cria a função de carregar o perfil, e verifica se não há perfil retorna nulo. para ser tratado pelo main.js

export { carregarVagas, salvarPerfil, carregarPerfil };

//exporta as funções relacionadas a cima
