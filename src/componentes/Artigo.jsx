import styled from "styled-components";

const StyledArtigo = styled.article`
  background-color: #883131;
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

/* Definindo props para o componente */
function Artigo({ categoria, titulo, preco, aoClicar }) {
  return (
    <StyledArtigo>
      <h3 onClick={aoClicar}>{categoria}</h3>
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
