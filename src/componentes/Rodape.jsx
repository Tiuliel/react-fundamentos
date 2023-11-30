function Rodape() {
  const exemploEstilos = {
    backgroundColor: "lightblue",
    padding: "2%",
    color: "blue",
    border: "Solid 4px #f00",
  };

  return (
    <footer style={exemploEstilos}>
      <h2 style={{ textAlign: "center" }}>Rodapé da aplicaçao</h2>
      <p className="centralizar destaque-texto">Fundamentos de React</p>
      <p>
        Experimentando <b className="sombra">classes</b>
      </p>
    </footer>
  );
}

export default Rodape;
