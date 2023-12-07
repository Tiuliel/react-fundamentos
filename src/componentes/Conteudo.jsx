import styled from "styled-components";
import Artigo from "./Artigo";

import cursos from "../api/cursos.js";
import { useState } from "react";

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

  .filtros button {
    margin: 0.5rem;
  }

  .filtros {
    margin: 1rem 0;
    padding: 1rem 0;
    border-top: solid 2px;
    border-bottom: solid 2px;
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
  const [categoria, setCategoria] = useState(null);
  const aplicarFiltro = (event) => {
    const categoriaEscolhida = event.currentTarget.innerText;
    setCategoria(categoriaEscolhida);
  };

  const limparFiltro = () => {
    setCategoria(null);
  };

  const cursosFiltrados = cursos.filter((curso) => {
    return curso.categoria === categoria || categoria === null;
  });

  return (
    <StyledConteudo>
      <h2>Conteúdo da aplicação</h2>

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Necessitatibus, corrupti obcaecati, maxime, pariatur officiis odit illo
        maiores cumque quaerat optio consequuntur neque? Asperiores officia
        reprehenderit natus libero non exercitationem vitae.
      </p>

      <div className="filtros">
        <p>
          <b>Filtrar por: </b>{" "}
          <button onClick={aplicarFiltro}>Front-End</button>
          <button onClick={aplicarFiltro}>Back-End</button>
          <button onClick={aplicarFiltro}>Design</button>
          <button onClick={aplicarFiltro}>Mobile</button>
          <button onClick={aplicarFiltro}>Gastronomia</button>
        </p>
        {categoria && <button onClick={limparFiltro}>🧹 Limpar filtro</button>}

        {categoria && (
          <p>
            Você escolheu: <b>{categoria}</b>
          </p>
        )}
      </div>

      <div className="artigos">
        {cursosFiltrados.map((curso) => (
          <Artigo key={curso.id} {...curso} />
        ))}
      </div>
    </StyledConteudo>
  );
}

export default Conteudo;
