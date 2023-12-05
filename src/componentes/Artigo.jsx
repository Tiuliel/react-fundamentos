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
function Artigo({ imagem, icone, titulo, descricao, data, children }) {
  return (
    <StyledArtigo>
      <figure className="centralizar">
        <img src={imagem} alt="" />
      </figure>
      <h3>
        <span>{icone}</span>
        {titulo}
      </h3>
      <p> {descricao} </p>
      <p>
        Lançamento: <time>{data}</time>
      </p>
      {children}
    </StyledArtigo>
  );
}

export default Artigo;
