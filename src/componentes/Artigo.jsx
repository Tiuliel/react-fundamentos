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

function Artigo() {
  return (
    <StyledArtigo>
      <h3>artigo 1</h3>
      <p>Conteúdo artigo 1.....</p>
    </StyledArtigo>
  );
}

export default Artigo;
