class Vaga {
  constructor(
    id,
    empresa,
    cargo,
    requisitos,
    salario,
    modalidade,
    experiencia,
  ) {
    this.id = id;
    this.empresa = empresa;
    this.cargo = cargo;
    this.requisitos = requisitos;
    this.salario = salario;
    this.modalidade = modalidade;
    this.experiencia = experiencia;
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

  analisar(habilidades) {
    const resultado = this.calcularCompatibilidade(habilidades);

    const classificacao = this.classificar(resultado.percentual);

    return {
      vaga: this,
      percentual: resultado.percentual,
      classificacao: classificacao,
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
      vaga.requisitos,
      vaga.salario,
      vaga.modalidade,
      vaga.experiencia,
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
export { Vaga, criarVagas, encontrarMelhorVaga };
