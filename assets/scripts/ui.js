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
                            Nome completo
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
                            Selecione todas as opções que você domina.
                        </small>


                        <div class="grupo-tecnologias">

                            <div>
                                <input
                                    type="checkbox"
                                    id="tec-html"
                                    name="tecnologias"
                                    value="HTML"
                                >

                                <label for="tec-html">
                                    HTML
                                </label>
                            </div>


                            <div>
                                <input
                                    type="checkbox"
                                    id="tec-css"
                                    name="tecnologias"
                                    value="CSS"
                                >

                                <label for="tec-css">
                                    CSS
                                </label>
                            </div>


                            <div>
                                <input
                                    type="checkbox"
                                    id="tec-js"
                                    name="tecnologias"
                                    value="JavaScript"
                                >

                                <label for="tec-js">
                                    JavaScript
                                </label>
                            </div>


                            <div>
                                <input
                                    type="checkbox"
                                    id="tec-ts"
                                    name="tecnologias"
                                    value="TypeScript"
                                >

                                <label for="tec-ts">
                                    TypeScript
                                </label>
                            </div>


                            <div>
                                <input
                                    type="checkbox"
                                    id="tec-react"
                                    name="tecnologias"
                                    value="React"
                                >

                                <label for="tec-react">
                                    React
                                </label>
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

                                <label for="tec-node">
                                    Node.js
                                </label>
                            </div>


                            <div>
                                <input
                                    type="checkbox"
                                    id="tec-java"
                                    name="tecnologias"
                                    value="Java"
                                >

                                <label for="tec-java">
                                    Java
                                </label>
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

                                <label for="tec-sql">
                                    SQL
                                </label>
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

                                <label for="tec-git">
                                    Git
                                </label>
                            </div>


                            <div>
                                <input
                                    type="checkbox"
                                    id="tec-docker"
                                    name="tecnologias"
                                    value="Docker"
                                >

                                <label for="tec-docker">
                                    Docker
                                </label>
                            </div>


                            <div>
                                <input
                                    type="checkbox"
                                    id="tec-aws"
                                    name="tecnologias"
                                    value="AWS"
                                >

                                <label for="tec-aws">
                                    AWS
                                </label>
                            </div>


                            <div>
                                <input
                                    type="checkbox"
                                    id="tec-figma"
                                    name="tecnologias"
                                    value="Figma"
                                >

                                <label for="tec-figma">
                                    Figma
                                </label>
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

                                <label for="tec-uxui">
                                    UX/UI
                                </label>
                            </div>

                        </div>

                    </div>


                    <div class="campo-formulario">

                        <label for="tempo-experiencia">
                            Quantos anos de experiência possui?
                        </label>

                        <input
                            type="number"
                            name="tempo-experiencia"
                            id="tempo-experiencia"
                            min="0"
                            step="1"
                            required
                        >

                    </div>


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

export { mostrarFormularioCandidato };
