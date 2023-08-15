import './Infos.css';
import imagemsecao from '../../imgs/cafe-xicara.png'
import Botao3 from '../Botões/Botao3';


function Infos() {
    return (
        <div className="container-infos" style={{ backgroundImage: "linear-gradient(to bottom, #F3C7C4, #541511)" }}>

            <div className="container-infos-esquerda">
            <h1>Meow<br />Enjoy</h1>
            <p>Todos os sábados e domingos</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</p>
            <Botao3 elemento={"Faça uma reserva >"} />
            </div>

            <div className="container-infos-meio">
                <img src={imagemsecao} alt="imagem" />
            </div>

            <div className="container-infos-direita">
                <h1>Localização</h1>
                <p>You can find us consectetur elit, sed do eiusmod tempor incididun.</p>
                <p><i class="fa-solid fa-map-pin icone"></i> Rua Lorem Ipsum, 99</p>
                <p><i class="fa-solid fa-envelope-open-text icone"></i> email@contato.com</p>
                <p><i class="fa-solid fa-phone icone"></i> (21) 00000-0000</p>

            </div>


        </div>
    );
}


export default Infos;