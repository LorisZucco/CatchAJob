// ========================================
// FORMULÁRIO DO CANDIDATO
// ========================================

function mostrarFormularioCandidato() {
  const conteudo = document.getElementById("conteudo-principal");

  conteudo.innerHTML = `
        <section class="formulario-candidato">

            <form id="form-candidato">

                <fieldset>

                    <legend>
                        Preencha os dados abaixo para encontrar a sua melhor vaga
                    </legend>


                    <div class="campo-formulario">

                        <label for="nome-completo">
                            Nome Completo
                        </label>

                        <input
                            type="text"
                            name="nome-completo"
                            id="nome-completo"
                            placeholder="Insira seu nome aqui"
                            required
                        >

                    </div>


                    <div class="campo-formulario">

                        <label for="idade">
                            Idade
                        </label>

                        <input
                            type="number"
                            name="idade"
                            id="idade"
                            min="18"
                            required
                        >

                    </div>


                    <div class="campo-formulario">

                        <p>
                            Qual a sua categoria de atuação principal?
                        </p>


                        <div>
                            <input
                                type="radio"
                                id="front"
                                name="categoria"
                                value="Front-end"
                                required
                            >

                            <label for="front">
                                Front-end
                            </label>
                        </div>


                        <div>
                            <input
                                type="radio"
                                id="back"
                                name="categoria"
                                value="Back-end"
                            >

                            <label for="back">
                                Back-end
                            </label>
                        </div>


                        <div>
                            <input
                                type="radio"
                                id="fullstack"
                                name="categoria"
                                value="Full Stack"
                            >

                            <label for="fullstack">
                                Full Stack
                            </label>
                        </div>

                    </div>


                    <div class="campo-formulario">

                        <p>
                            Quais tecnologias ou ferramentas você domina?
                        </p>

                        <small>
                            Marque todas que você possui conhecimento.
                        </small>


                        <div class="grupo-tecnologias">

                            <div>
                                <input
                                    type="checkbox"
                                    id="tec-html"
                                    name="tecnologias"
                                    value="HTML"
                                >
                                <label for="tec-html">HTML</label>
                            </div>


                            <div>
                                <input
                                    type="checkbox"
                                    id="tec-css"
                                    name="tecnologias"
                                    value="CSS"
                                >
                                <label for="tec-css">CSS</label>
                            </div>


                            <div>
                                <input
                                    type="checkbox"
                                    id="tec-js"
                                    name="tecnologias"
                                    value="JavaScript"
                                >
                                <label for="tec-js">JavaScript</label>
                            </div>


                            <div>
                                <input
                                    type="checkbox"
                                    id="tec-ts"
                                    name="tecnologias"
                                    value="TypeScript"
                                >
                                <label for="tec-ts">TypeScript</label>
                            </div>


                            <div>
                                <input
                                    type="checkbox"
                                    id="tec-react"
                                    name="tecnologias"
                                    value="React"
                                >
                                <label for="tec-react">React</label>
                            </div>


                            <div>
                                <input
                                    type="checkbox"
                                    id="tec-resp"
                                    name="tecnologias"
                                    value="Responsividade"
                                >
                                <label for="tec-resp">
                                    Responsividade
                                </label>
                            </div>


                            <div>
                                <input
                                    type="checkbox"
                                    id="tec-node"
                                    name="tecnologias"
                                    value="Node.js"
                                >
                                <label for="tec-node">Node.js</label>
                            </div>


                            <div>
                                <input
                                    type="checkbox"
                                    id="tec-java"
                                    name="tecnologias"
                                    value="Java"
                                >
                                <label for="tec-java">Java</label>
                            </div>


                            <div>
                                <input
                                    type="checkbox"
                                    id="tec-spring"
                                    name="tecnologias"
                                    value="Spring Boot"
                                >
                                <label for="tec-spring">
                                    Spring Boot
                                </label>
                            </div>


                            <div>
                                <input
                                    type="checkbox"
                                    id="tec-apis"
                                    name="tecnologias"
                                    value="APIs REST"
                                >
                                <label for="tec-apis">
                                    APIs REST
                                </label>
                            </div>


                            <div>
                                <input
                                    type="checkbox"
                                    id="tec-sql"
                                    name="tecnologias"
                                    value="SQL"
                                >
                                <label for="tec-sql">SQL</label>
                            </div>


                            <div>
                                <input
                                    type="checkbox"
                                    id="tec-postgres"
                                    name="tecnologias"
                                    value="PostgreSQL"
                                >
                                <label for="tec-postgres">
                                    PostgreSQL
                                </label>
                            </div>


                            <div>
                                <input
                                    type="checkbox"
                                    id="tec-db"
                                    name="tecnologias"
                                    value="Banco de dados"
                                >
                                <label for="tec-db">
                                    Banco de dados
                                </label>
                            </div>


                            <div>
                                <input
                                    type="checkbox"
                                    id="tec-git"
                                    name="tecnologias"
                                    value="Git"
                                >
                                <label for="tec-git">Git</label>
                            </div>


                            <div>
                                <input
                                    type="checkbox"
                                    id="tec-docker"
                                    name="tecnologias"
                                    value="Docker"
                                >
                                <label for="tec-docker">Docker</label>
                            </div>


                            <div>
                                <input
                                    type="checkbox"
                                    id="tec-aws"
                                    name="tecnologias"
                                    value="AWS"
                                >
                                <label for="tec-aws">AWS</label>
                            </div>


                            <div>
                                <input
                                    type="checkbox"
                                    id="tec-figma"
                                    name="tecnologias"
                                    value="Figma"
                                >
                                <label for="tec-figma">Figma</label>
                            </div>


                            <div>
                                <input
                                    type="checkbox"
                                    id="tec-acessibilidade"
                                    name="tecnologias"
                                    value="Acessibilidade"
                                >
                                <label for="tec-acessibilidade">
                                    Acessibilidade
                                </label>
                            </div>


                            <div>
                                <input
                                    type="checkbox"
                                    id="tec-uxui"
                                    name="tecnologias"
                                    value="UX/UI"
                                >
                                <label for="tec-uxui">UX/UI</label>
                            </div>

                        </div>

                    </div>


                    <div class="campo-formulario">

                        <label for="tempo-de-experiencia">
                            Quantos anos de experiência possui?
                        </label>

                        <input
                            type="number"
                            name="tempo-de-experiencia"
                            id="tempo-de-experiencia"
                            min="0"
                            step="0.5"
                            required
                        >

                    </div>
        <p
  id="mensagem-formulario"
  class="mensagem-formulario"
></p>

                    <button
                        type="submit"
                        id="btn-encontrar-vagas"
                    >
                        Encontrar vagas
                    </button>

                </fieldset>

            </form>

        </section>
    `;
}

// ========================================
// OBTER DADOS DO FORMULÁRIO
// ========================================

function obterDadosFormulario() {
  const nome = document.getElementById("nome-completo").value;

  const idade = Number(document.getElementById("idade").value);

  const categoriaSelecionada = document.querySelector(
    'input[name="categoria"]:checked',
  );

  const tecnologiasSelecionadas = document.querySelectorAll(
    'input[name="tecnologias"]:checked',
  );

  const experiencia = Number(
    document.getElementById("tempo-de-experiencia").value,
  );

  const habilidades = Array.from(tecnologiasSelecionadas).map((tecnologia) => {
    return tecnologia.value;
  });

  const perfil = {
    nome: nome,
    idade: idade,
    categoria: categoriaSelecionada ? categoriaSelecionada.value : null,
    habilidades: habilidades,
    experiencia: experiencia,
  };

  return perfil;
}

// ========================================
// FORMATAR EXPERIÊNCIA
// ========================================

function formatarExperiencia(experiencia) {
  if (experiencia === 0) {
    return "Não exige experiência";
  }

  if (experiencia === 0.5) {
    return "6 meses";
  }

  if (experiencia === 1) {
    return "1 ano";
  }

  return `${experiencia} anos`;
}

// ========================================
// CRIAR LISTA DE HABILIDADES
// ========================================

function criarListaHabilidades(habilidades) {
  return habilidades
    .map((habilidade) => {
      return `<li>${habilidade}</li>`;
    })
    .join("");
}

// ========================================
// CRIAR CARD DE VAGA
// ========================================

function criarCardVaga(resultado, melhorVaga = false) {
  const card = document.createElement("article");

  card.classList.add("card-vaga");

  if (melhorVaga) {
    card.classList.add("card-melhor-vaga");
  }

  card.innerHTML = `

        ${
          melhorVaga
            ? `
                    <span class="destaque-melhor-vaga">
                        Melhor compatibilidade
                    </span>
                `
            : ""
        }


        <h3>
            ${resultado.vaga.cargo}
        </h3>


        <p>
            <strong>Empresa:</strong>
            ${resultado.vaga.empresa}
        </p>


        <p class="compatibilidade">
            ${resultado.percentual}% de compatibilidade
        </p>


        <p>
            <strong>Classificação:</strong>
            ${resultado.classificacao}
        </p>


        <p>
            <strong>Modalidade:</strong>
            ${resultado.vaga.modalidade}
        </p>


        <p>
            <strong>Salário:</strong>
            ${resultado.vaga.salario}
        </p>


        <p>
            <strong>Experiência mínima:</strong>
            ${formatarExperiencia(resultado.vaga.experienciaMinima)}
        </p>


        <p>
            <strong>Requisito de experiência:</strong>

            ${
              resultado.atendeExperiencia
                ? "Atende ao requisito"
                : "Ainda não atende ao requisito"
            }
        </p>


        <div class="habilidades">

            <h4>
                Habilidades encontradas
            </h4>

            <ul>
                ${criarListaHabilidades(resultado.encontradas)}
            </ul>

        </div>


        <div class="habilidades">

            <h4>
                Habilidades a desenvolver
            </h4>

            <ul>
                ${criarListaHabilidades(resultado.faltantes)}
            </ul>

        </div>
    `;

  return card;
}

// ========================================
// MOSTRAR RESULTADOS
// ========================================

function mostrarResultados(resultados, melhoresVagas) {
  const conteudo = document.getElementById("conteudo-principal");

  // ====================================
  // SEPARAR MELHORES DAS OUTRAS
  // ====================================

  const outrasVagas = resultados.filter((resultado) => {
    const ehMelhorVaga = melhoresVagas.some((melhor) => {
      return melhor.vaga.id === resultado.vaga.id;
    });

    return !ehMelhorVaga;
  });

  // ====================================
  // ESTRUTURA DOS RESULTADOS
  // ====================================

  conteudo.innerHTML = `

        <section
            id="resultado-vagas"
            class="resultado-vagas"
        >

            <h2>
                Vagas encontradas para você
            </h2>


            <section class="melhor-vaga">

                <h3>

                    ${
                      melhoresVagas.length > 1
                        ? "Melhores vagas para o seu perfil"
                        : "Melhor vaga para o seu perfil"
                    }

                </h3>


                <div class="lista-melhores-vagas">
                </div>

            </section>


            <section class="outras-vagas">

                <h3>
                    Outras vagas
                </h3>

                <div class="lista-vagas">
                </div>

            </section>

        </section>
    `;

  // ====================================
  // MOSTRAR MELHORES VAGAS
  // ====================================

  const listaMelhoresVagas = document.querySelector(".lista-melhores-vagas");

  melhoresVagas.forEach((resultado) => {
    const card = criarCardVaga(resultado, true);

    listaMelhoresVagas.appendChild(card);
  });

  // ====================================
  // MOSTRAR OUTRAS VAGAS
  // ====================================

  const listaVagas = document.querySelector(".lista-vagas");

  outrasVagas.forEach((resultado) => {
    const card = criarCardVaga(resultado);

    listaVagas.appendChild(card);
  });
}

function mostrarMensagem(titulo, mensagem) {
  const conteudo = document.getElementById("conteudo-principal");

  conteudo.innerHTML = `
        <section class="mensagem-sistema">

            <h2>${titulo}</h2>

            <p>${mensagem}</p>

        </section>
    `;
}

function mostrarErroFormulario(mensagem) {
  const elementoMensagem = document.getElementById("mensagem-formulario");

  if (!elementoMensagem) {
    return;
  }

  elementoMensagem.textContent = mensagem;
}
// ========================================
// EXPORTAÇÕES
// ========================================

export {
  mostrarFormularioCandidato,
  obterDadosFormulario,
  mostrarResultados,
  mostrarMensagem,
  mostrarErroFormulario,
};
