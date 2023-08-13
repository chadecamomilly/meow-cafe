import Botao2 from '../Botões/Botao2';
import './Produtos.css';
import TitulosSecoes from '../Títulos/TitulosSecoes';
import Botao3 from '../Botões/Botao3';

function Produtos() {
  return (
    <div>
      <div className="container-geral">
        <TitulosSecoes titulo="Drinks" />
        <TitulosSecoes descricao="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text." />
        <Botao3 elemento="Veja todos >" />
      </div>
      <div className="container-cards">
        <div className="card" style={{ backgroundImage: "linear-gradient(to top, #F6C7C5, #C27D7A)" }}>
          <img src={require("../../imgs/cafe1.png")} alt="img" />
          <p>R$16,00</p>
          <h2>Capuccino</h2>
          <p>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Botao2 elemento="Comprar" />
        </div>

        <div className="card" style={{ backgroundImage: "linear-gradient(to top, #FAFAFA, #541511)" }}>
        <img src={require("../../imgs/cafe2.png")} alt="img" />
        <p>R$16,00</p>
          <h2>Café ao Leite</h2>
          <p>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Botao2 elemento="Comprar" />
        </div>

        <div className="card" style={{ backgroundImage: "linear-gradient(to top, #0A0909, #541511)" }}>
        <img src={require("../../imgs/cafe3.png")} alt="img" />
        <p>R$16,00</p>
          <h2>Café Preto</h2>
          <p>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Botao2 elemento="Comprar" />
        </div>
      </div>
    </div>
  );
}


export default Produtos;