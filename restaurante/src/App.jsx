import { useState } from "react";
import Restaurante from "./assets/hashtaurante.webp"
import './App.css';
import { Navegacao } from "./Navegacao";
import { ItemCardapio } from "./ItemCardapio";
import { pratosPrincipais, sobremesas, bebidas } from "./cardapio"

export function App(){
  const paginasMenu = [pratosPrincipais, sobremesas, bebidas]
  const [paginaSelecionada, atualizarPagina] = useState(0);


  return (
  <>
    <img src={Restaurante} className="capa" />
    <Navegacao atualizarPagina={atualizarPagina}/>
    <div className="menu">
    {paginasMenu[paginaSelecionada].map(item => <ItemCardapio nome={item.nome} preco={item.preco} descricao={item.descricao} imagem={item.imagem}/>)}
    </div>
  </>
  )
}