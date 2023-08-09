import logo from '../../imgs/logo.png'
import './Menu.css'
import React from 'react'

function Menu() {
    return (
        <div>
            <div className="menu-container">
                <div className="menu-esquerda">
                    <img src={logo} alt="logo" className="logo" width="130px" />
                    <p>Meow Café</p>              
                </div>

                <div className="menu-direita">
                    <ul class="desk">
                        <li>Início</li>
                        <li>Produtos</li>
                        <li>Sobre</li>
                        <li>Contato</li>
                    </ul>
                    <ul className="trigger-menu">
                    <li>III</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Menu