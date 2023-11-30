import Artigo from "./Artigo";

function Conteudo() {
  return (
    <main>
      <section>
        <h2>Conteúdo da aplicação</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, corrupti obcaecati, maxime, pariatur officiis odit
          illo maiores cumque quaerat optio consequuntur neque? Asperiores
          officia reprehenderit natus libero non exercitationem vitae.
        </p>
      </section>
      <hr />

      <Artigo />
      <Artigo />
      <Artigo />
    </main>
  );
}

export default Conteudo;
