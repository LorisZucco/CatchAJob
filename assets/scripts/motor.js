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
    console.log("Experiência candidato:", experienciaCandidato);
    console.log("Experiência mínima:", this.experienciaMinima);

    if (experienciaCandidato >= this.experienciaMinima) {
      return true;
    }

    return false;
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

function criarVagas(vagas) {
  return vagas.map((vaga) => {
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
function encontrarMelhorVaga(resultados) {
  const melhorVaga = resultados.reduce((melhor, atual) => {
    if (atual.percentual > melhor.percentual) {
      return atual;
    }

    return melhor;
  });

  return melhorVaga;
}

export { Vaga, criarVagas, filtrarVagasPorCategoria, encontrarMelhorVaga };
