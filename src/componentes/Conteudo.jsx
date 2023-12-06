import styled from "styled-components";
import Artigo from "./Artigo";

import cursos from "../api/cursos.js";

const StyledConteudo = styled.main`
  width: 90vw;
  margin: 1rem auto;
  background-color: lightblue;
  padding: 1rem;
  box-shadow: darkblue 0 0 1px inset;

  h2,
  p {
    padding: 0.2rem 0;
  }

  @media (min-width: 650px) {
    .artigos {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      & article {
        width: 48%;
      }
    }
  }
`;

function Conteudo() {
  const exemplo2 = () => {
    alert("Exemplo 2");
  };

  const exemplo3 = () => {
    alert("Exemplo 3");
  };

  return (
    <StyledConteudo>
      <h2>Conteúdo da aplicação</h2>

      <button onClick={exemplo2}>Exemplo 2</button>
      <button onClick={exemplo3}>
        Exemplo 3 (Acionando o evento/função do conteudo [pai])
      </button>

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Necessitatibus, corrupti obcaecati, maxime, pariatur officiis odit illo
        maiores cumque quaerat optio consequuntur neque? Asperiores officia
        reprehenderit natus libero non exercitationem vitae.
      </p>

      <div className="artigos">
        {cursos.map((curso) => (
          <Artigo key={curso.id} {...curso} />
        ))}
      </div>
    </StyledConteudo>
  );
}

export default Conteudo;
