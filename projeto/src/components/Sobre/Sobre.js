import './Sobre.css';
import fundo from '../../imgs/fundo-secao2.png'

function Sobre() {
    return (
        <div className="fundo-secao" style={{ backgroundImage: `url(${fundo})` }}>
            <div className="sobre-container">

                <div className="sobre-esquerda">
                    <p>Sobre nós</p>
                    <h1>We offer a unique coffee house environment unlike any other in N.Y</h1>
                </div>


                <div className="sobre-esquerda">
                    <p><strong>O melhor lugar para apreciar o seu café</strong></p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.

                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                </div>

            </div>
        </div>
    );
}


export default Sobre;