// ========================================
// CARREGAR VAGAS
// ========================================

async function carregarVagas() {
  try {
    const response = await fetch("./assets/data/vagas.json");

    if (!response.ok) {
      console.error("Não foi possível carregar o arquivo de vagas.");

      return null;
    }

    const vagas = await response.json();

    return vagas;
  } catch (error) {
    console.error("Ocorreu um erro ao carregar as vagas:", error);

    return null;
  }
}

// ========================================
// SALVAR PERFIL
// ========================================

function salvarPerfil(perfil) {
  if (!perfil) {
    return;
  }

  localStorage.setItem("skillMatchProfile", JSON.stringify(perfil));
}

// ========================================
// CARREGAR PERFIL
// ========================================

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

// ========================================
// LIMPAR PERFIL
// ========================================

function limparPerfil() {
  localStorage.removeItem("skillMatchProfile");
}

// ========================================
// EXPORTAÇÕES
// ========================================

export { carregarVagas, salvarPerfil, carregarPerfil, limparPerfil };
