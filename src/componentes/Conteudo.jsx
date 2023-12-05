import styled from "styled-components";
import Artigo from "./Artigo";

import imagem1 from "../assets/abra-o-livro.png";
import imagem2 from "../assets/livro-magico.png";
import imagem3 from "../assets/pilha-de-livros.png";

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
  const lancamento = ["10/10/1954", "01/01/1995", "15/12/2012"];
  return (
    <StyledConteudo>
      <h2>Conteúdo da aplicação</h2>

      <img src="" alt="" />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Necessitatibus, corrupti obcaecati, maxime, pariatur officiis odit illo
        maiores cumque quaerat optio consequuntur neque? Asperiores officia
        reprehenderit natus libero non exercitationem vitae.
      </p>

      <div>
        <Artigo
          imagem={imagem1}
          data={lancamento[0]}
          icone="🎅"
          titulo="Senho dos Anéis"
          descricao="Livro criado por Tokien"
        />
        <Artigo
          imagem={imagem2}
          data={lancamento[1]}
          icone="🧔"
          titulo="Game of Thrones"
          descricao="Aventura maluca com gente sempre morrendo"
        />
        <Artigo
          imagem={imagem3}
          data={lancamento[2]}
          icone="🤶"
          titulo="HTML5 e CSS3"
          descricao="Fonte de estudos para quem quer começar no Front-End"
        />
      </div>
    </StyledConteudo>
  );
}

export default Conteudo;
