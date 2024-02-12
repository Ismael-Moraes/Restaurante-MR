

export function ItemCardapio(props){
    return (
        <div className="container-item-cardapio">
            <div>
                <h2>{props.nome}</h2>
                <strong>{props.preco}</strong>
                <p>{props.descricao}</p>
            </div>
            <img src={props.imagem} alt="" />
        </div>
    )
}