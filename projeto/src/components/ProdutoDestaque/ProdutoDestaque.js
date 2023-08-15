import './ProdutoDestaque.css';
import Botao3 from '../Botões/Botao3';
import imagemsecao from '../../imgs/croissants.png'

function ProdutoDestaque() {
  return (
    <div className="container-destaques">

      <div className="container-destaques-esquerda">
        <p className="preco-detalhe">R$12,00</p>
        <h1>Croissants</h1>
        <h2>Duis aute irure quasi</h2>
        <div class="divisor-esquerda"></div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
        <Botao3 elemento="Todos os croissants >" />
      </div>

      <div className="container-destaques-direita" style={{ backgroundImage: `url(${imagemsecao})` }}>
        
        </div>

      </div>
  );
}


export default ProdutoDestaque;