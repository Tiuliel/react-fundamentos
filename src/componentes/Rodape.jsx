import styled from "styled-components";

const StyledRodape = styled.footer`
  background: linear-gradient(to right, #3498db, #2c3e50);
  margin: 0;
  color: white;
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
function Rodape() {
  return (
    <StyledRodape>
      <h2>Rodapé da aplicaçao</h2>
    </StyledRodape>
  );
}

export default Rodape;
