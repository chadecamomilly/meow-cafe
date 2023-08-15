import './Footer.css'

function Footer() {
    return (
        <section>
        <div className="footer-container">
            <div className="footer-esquerda">
                <h3>Informações</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                <div className="container-icones">
                    <i class="fa-brands fa-instagram icones"></i>
                    <i class="fa-brands fa-facebook-f icones"></i>
                    <i class="fa-brands fa-whatsapp icones"></i>
                </div>
            </div>

            <div className="footer-meio">
                <h3>Links Úteis</h3>
                <p>Início<br />
                    Sobre<br />
                    Produtos<br />
                    Delivery<br />
                    Login</p>
            </div>

            <div className="footer-direita">
                <h3>Institucional</h3>
                <p><strong>CNPJ:</strong> XX. XXX. XXX/0001-XX<br />
                <strong>Endereço:</strong> Lorem ipsum, 99<br />
                Política de Privacidade<br />
                Dúvidas Frequentes<br />
                Ajuda
                </p>
            </div>
        </div>
        <div className="copyright">
        <p>Desenvolvido por Camilly Vianna</p>
        </div>
        </section>
    )
}

export default Footer