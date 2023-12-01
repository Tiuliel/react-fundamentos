import styled from "styled-components";

const StyledRodape = styled.footer`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30vh;
  background: linear-gradient(to right, #3498db, #2c3e50);
`;
function Rodape() {
  return (
    <StyledRodape>
      <h2>Rodapé da aplicaçao</h2>
    </StyledRodape>
  );
}

export default Rodape;
