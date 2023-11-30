import Artigo from "./Artigo";
import estilos from "./Cabecalho.module.css";

function Conteudo() {
  return (
    <main>
      <section>
        <h2 className={`${estilos["destaque-texto"]} centralizar`}>
          Conteúdo da aplicação
        </h2>
        {/* <p className="centralizar destaque-texto"> */}
        <p className={`${estilos.texto} centralizar destaque-texto`}>
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
