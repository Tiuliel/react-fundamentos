import styled from "styled-components";
import Artigo from "./Artigo";

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

  div {
    @media (min-width: 650px) {
      display: flex;
      margin-right: 1rem;
      gap: 10px;
    }
  }
`;

function Conteudo() {
  return (
    <StyledConteudo>
      <h2>Conteúdo da aplicação</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Necessitatibus, corrupti obcaecati, maxime, pariatur officiis odit illo
        maiores cumque quaerat optio consequuntur neque? Asperiores officia
        reprehenderit natus libero non exercitationem vitae.
      </p>

      <div>
        <Artigo
          icone="🎅"
          titulo="Senho dos Anéis"
          descricao="Livro criado por Tokien"
        />
        <Artigo
          icone="🧔"
          titulo="Game of Thrones"
          descricao="Aventura maluca com gente sempre morrendo"
        />
        <Artigo
          icone="🤶"
          titulo="HTML5 e CSS3"
          descricao="Fonte de estudos para quem quer começar no Front-End"
        />
      </div>
    </StyledConteudo>
  );
}

export default Conteudo;
