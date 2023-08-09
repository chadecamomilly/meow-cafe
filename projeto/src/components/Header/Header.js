import './Header.css'
import Button from '../Botões/Botao1';

function Header() {
    return (
        <div className="header-container">
            <div className="header-esquerda">
                <p>Smooth Taste</p>
                <h1>Meow Café</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                <Button children="Saiba Mais"/>
            </div>
        </div>
    )
}

export default Header