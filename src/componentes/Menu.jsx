import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledMenu = styled.nav`
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .active {
    background-color: white;
    color: black;
  }

  a {
    color: white;
    text-decoration: none;
    width: 30%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 100ms;

    &:hover {
      background-color: pink;
      color: black;
    }
  }
`;

function Menu() {
  return (
    <StyledMenu>
      <NavLink to="/">Home </NavLink>
      <NavLink to="/produtos">Produtos </NavLink>
      <NavLink to="/contato">Contato</NavLink>
    </StyledMenu>
  );
}

export default Menu;
