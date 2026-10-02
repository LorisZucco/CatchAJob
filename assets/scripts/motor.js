class Vaga {
  constructor(
    id,
    empresa,
    cargo,
    categoria,
    requisitos,
    salario,
    modalidade,
    experienciaMinima,
  ) {
    this.id = id;
    this.empresa = empresa;
    this.cargo = cargo;
    this.categoria = categoria;
    this.requisitos = requisitos;
    this.salario = salario;
    this.modalidade = modalidade;
    this.experienciaMinima = experienciaMinima;
  }

  calcularCompatibilidade(habilidades) {
    const habilidadesEncontradas = this.requisitos.filter((requisito) =>
      habilidades.includes(requisito),
    );

    const habilidadesFaltantes = this.requisitos.filter(
      (requisito) => !habilidades.includes(requisito),
    );

    const percentual =
      (habilidadesEncontradas.length / this.requisitos.length) * 100;

    return {
      percentual: Math.round(percentual),
      encontradas: habilidadesEncontradas,
      faltantes: habilidadesFaltantes,
    };
  }

  classificar(percentual) {
    if (percentual >= 80) {
      return "Alta";
    }

    if (percentual >= 50) {
      return "Média";
    }

    return "Baixa";
  }

  verificarExperiencia(experienciaCandidato) {
    if (experienciaCandidato >= this.experienciaMinima) {
      return true;
    }

    return false;
  }

  // Método que será sobrescrito pelas subclasses
  getArea() {
    return "Desenvolvimento";
  }

  analisar(habilidades, experienciaCandidato) {
    const resultado = this.calcularCompatibilidade(habilidades);

    const classificacao = this.classificar(resultado.percentual);

    const atendeExperiencia = this.verificarExperiencia(experienciaCandidato);

    return {
      vaga: this,
      percentual: resultado.percentual,
      classificacao: classificacao,
      atendeExperiencia: atendeExperiencia,
      encontradas: resultado.encontradas,
      faltantes: resultado.faltantes,
    };
  }
}

// ========================================
// HERANÇA
// ========================================

class VagaFrontEnd extends Vaga {
  getArea() {
    return "Desenvolvimento Front-end";
  }
}

class VagaBackEnd extends Vaga {
  getArea() {
    return "Desenvolvimento Back-end";
  }
}

class VagaFullStack extends Vaga {
  getArea() {
    return "Desenvolvimento Full Stack";
  }
}

function criarContadorAnalises() {
  let quantidadeAnalises = 0;

  return function () {
    quantidadeAnalises++;

    return quantidadeAnalises;
  };
}

const contarAnalise = criarContadorAnalises();
// ========================================
// CRIAÇÃO DAS VAGAS
// ========================================

function criarVagas(vagas) {
  return vagas.map((vaga) => {
    if (vaga.categoria === "Front-end") {
      return new VagaFrontEnd(
        vaga.id,
        vaga.empresa,
        vaga.cargo,
        vaga.categoria,
        vaga.requisitos,
        vaga.salario,
        vaga.modalidade,
        vaga.experienciaMinima,
      );
    }

    if (vaga.categoria === "Back-end") {
      return new VagaBackEnd(
        vaga.id,
        vaga.empresa,
        vaga.cargo,
        vaga.categoria,
        vaga.requisitos,
        vaga.salario,
        vaga.modalidade,
        vaga.experienciaMinima,
      );
    }

    if (vaga.categoria === "Full Stack") {
      return new VagaFullStack(
        vaga.id,
        vaga.empresa,
        vaga.cargo,
        vaga.categoria,
        vaga.requisitos,
        vaga.salario,
        vaga.modalidade,
        vaga.experienciaMinima,
      );
    }

    // Caso apareça alguma categoria diferente no JSON
    return new Vaga(
      vaga.id,
      vaga.empresa,
      vaga.cargo,
      vaga.categoria,
      vaga.requisitos,
      vaga.salario,
      vaga.modalidade,
      vaga.experienciaMinima,
    );
  });
}

// ========================================
// FILTRO POR CATEGORIA
// ========================================

function filtrarVagasPorCategoria(vagas, categoriaCandidato) {
  return vagas.filter((vaga) => {
    if (categoriaCandidato === "Full Stack") {
      return true;
    }

    return (
      vaga.categoria === categoriaCandidato || vaga.categoria === "Full Stack"
    );
  });
}

// ========================================
// MELHORES VAGAS
// ========================================

function encontrarMelhoresVagas(resultados) {
  if (resultados.length === 0) {
    return [];
  }

  const maiorPercentual = resultados.reduce((maior, resultado) => {
    if (resultado.percentual > maior) {
      return resultado.percentual;
    }

    return maior;
  }, 0);

  const melhoresVagas = resultados.filter((resultado) => {
    return resultado.percentual === maiorPercentual;
  });

  return melhoresVagas;
}

// ========================================
// ORDENAÇÃO
// ========================================

function ordenarPorCompatibilidade(resultados) {
  return resultados.toSorted((a, b) => {
    return b.percentual - a.percentual;
  });
}

// ========================================
// EXPORTAÇÕES
// ========================================

export {
  Vaga,
  VagaFrontEnd,
  VagaBackEnd,
  VagaFullStack,
  criarVagas,
  filtrarVagasPorCategoria,
  encontrarMelhoresVagas,
  ordenarPorCompatibilidade,
  contarAnalise,
};
