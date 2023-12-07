import Cabecalho from "./componentes/Cabecalho";
import Rodape from "./componentes/Rodape";
import Container from "./componentes/container";
import Contato from "./pages/contato";
import Home from "./pages/home";
import Produtos from "./pages/produtos";

function App() {
  return (
    <>
      <Cabecalho />
      <Container>
        <Home />
        <Produtos />
        <Contato />
      </Container>
      <Rodape />
    </>
  );
}

export default App;
