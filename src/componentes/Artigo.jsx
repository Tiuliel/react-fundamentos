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
`;

/* Definindo props para o componente */
function Artigo(props) {
  return (
    <StyledArtigo>
      <h3> {props.titulo} </h3>
      <p> {props.descricao} </p>
    </StyledArtigo>
  );
}

export default Artigo;
