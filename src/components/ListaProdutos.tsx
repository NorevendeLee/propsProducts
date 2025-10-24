import React from "react"


interface Produto {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
}

interface ListaProdutosProps {
  produtos: Produto[]
}

export default function ListaProdutos({ produtos }: ListaProdutosProps) {
  return (
    <div className="produtos-container">
      {produtos.map((produto) => (
        <div key={produto.id} className="produto-card">
          <img src={produto.image} alt={produto.title} />
          <h3>{produto.title}</h3>
          <p className="categoria">{produto.category}</p>
          <p className="preco">💰 R$ {produto.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  )
}
