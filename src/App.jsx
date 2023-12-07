import Cabecalho from "./componentes/Cabecalho";
import Rodape from "./componentes/Rodape";
import Container from "./componentes/container";
import Contato from "./pages/contato";
import Home from "./pages/home";
import Produtos from "./pages/produtos";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Cabecalho />
        <Container>
          <Routes>
            <Route Component={Home} exac path="/" />
            <Route Component={Produtos} path="/produtos" />
            <Route Component={Contato} path="/contato" />
          </Routes>
        </Container>
        <Rodape />
      </BrowserRouter>
    </>
  );
}

export default App;
