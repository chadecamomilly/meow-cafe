import logo from '../../imgs/logo.png'
import './Menu.css'
import Button from '../Botões/Botao1'


function Menu() {


    return (
        <div>
            <div className="menu-container">

                <div className="menu-esquerda">
                    <img src={logo} alt="logo" className="logo" width="130px" />
                    <p>Meow Café</p>
                </div>

                <div className="menu-meio">
                    <ul className="desk">
                        <li><a href="#">Início</a></li>
                        <li><a href="#">Produtos</a></li>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>

                </div>

                <div className="menu-direita">
                    <ul className="desk">
                        <li><a href="#">Login</a></li>
                    </ul>
                    <Button elemento="Delivery" />
                    <ul className="trigger-menu">
                    <li><i class="fa-solid fa-bars"></i></li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Menu