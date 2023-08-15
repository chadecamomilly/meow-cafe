import './Delivery.css';
import Botao2 from '../Botões/Botao2';
import imagemsecao from '../../imgs/delivery.png'

function Delivery() {
    return (
        <div className="container-delivery" style={{ backgroundImage: "linear-gradient(to bottom, #F3C7C4, #541511)" }}>

            <div className="container-delivery-esquerda">
                <img src={imagemsecao} alt="imagem" />
            </div>

            <div className="container-delivery-direita">
                <h1>Na sua casa!</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                <div className="alinhar-botao">
                <Botao2 elemento="Delivery" />
                </div>
            </div>


        </div>
    );
}


export default Delivery;