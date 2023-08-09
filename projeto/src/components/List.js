import Item from "./Item"

function List() {
    return(
        <>
        <h1>Minha lista</h1>
        <ul>
          <Item marca="Sephora" lancamento={1956} />
          <Item marca="Loja 3" lancamento={1999} />
          <Item marca="Zara" />
        </ul>
        </>
    )
}

export default List