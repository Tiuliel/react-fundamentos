import styled from "styled-components";
import { useState } from "react";

const StyledArtigo = styled.article`
  background-color: purple;
  padding: 1rem;
  margin: 0.5rem 0;

  h3 {
    border-bottom: 12px solid blue;
    color: green;
  }
  p {
    font-size: 1.1rem;
  }

  .centralizar {
    text-align: center;
  }
`;

function Artigo({ categoria, titulo, preco }) {
  const [cor, setCor] = useState("purple");
  const mudaCor = () => {
    cor === "purple" ? setCor("yellow") : setCor("purple");
  };
  return (
    <StyledArtigo onClick={mudaCor} style={{ backgroundColor: cor }}>
      <h3>{categoria}</h3>
      <p>
        <b>Curso: </b>
        {titulo}
      </p>
      <p>
        <b>Preço: </b>
        {preco.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
      </p>
    </StyledArtigo>
  );
}

export default Artigo;
