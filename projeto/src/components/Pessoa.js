function Pessoa({nome, idade, profissao, foto}) {
    return(
        <div>
            <img src={foto} alt={nome} />
            <h2><i>Nome:</i> {nome}</h2>
            <p><i>Idade:</i> {idade}</p>
            <p><i>Profissão:</i> {profissao}</p>
        </div>
    )
}

export default Pessoa