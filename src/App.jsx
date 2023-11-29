function App() {
  // Comentário de uma linha CTRL ;
  /* Comentário de várias linhas ALT SHIFT A */
  return (
    <>
      <header>
        <h1>Olá React!</h1>
        <hr />
        <nav>
          <a href="">Home </a>
          <a href="">Produtos </a>
          <a href="">Contato</a>
        </nav>
      </header>
      {/* Comentário DENTRO do JSX 
      É normal ficar entre {} nesta situação.*/}
      <main>
        <section>
          <h2>Conteúdo da aplicação</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, corrupti obcaecati, maxime, pariatur officiis odit
            illo maiores cumque quaerat optio consequuntur neque? Asperiores
            officia reprehenderit natus libero non exercitationem vitae.
          </p>

          <article>
            <h3>artigo 1</h3>
            <p>Conteúdo artigo 1.....</p>
          </article>

          <article>
            <h3>artigo 2</h3>
            <p>Conteúdo artigo 2.....</p>
          </article>

          <article>
            <h3>artigo 3</h3>
            <p>Conteúdo artigo 3.....</p>
          </article>
        </section>
      </main>
    </>
  );
}

export default App;
