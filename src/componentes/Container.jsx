import styled from "styled-components";

function Container() {
  return <StyledContainer> </StyledContainer>;
}

const StyledContainer = styled.main`
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
`;

export default Container;
