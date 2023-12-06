import { useState } from "react";
import Menu from "./Menu";

/* Importação da lib Styled Components */
import styled from "styled-components";

const StyledCabecalho = styled.header`
  background-color: black;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;

  hr {
    width: 50%;
    background-color: #f70491;
    border: none;
    height: 4px;
    margin: 8px auto;
  }
`;

function Cabecalho() {
  const [titulo, setTitulo] = useState("Olá React! 😎");
  const mudarTitulo = () => {
    setTitulo("oie! 😍");
  };

  return (
    <StyledCabecalho>
      <h1 onClick={mudarTitulo}>{titulo}</h1>
      <hr />
      <Menu />
    </StyledCabecalho>
  );
}
export default Cabecalho;
