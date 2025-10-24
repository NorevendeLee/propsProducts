import { useEffect, useState } from "react"
import ListaProdutos from "./components/ListaProdutos"
import "./App.css"

interface Produto {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
}

function App() {
  const [produtos, setProdutos] = useState<Produto[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data: Produto[]) => {
        setProdutos(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error("Erro ao buscar produtos:", err)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <p>Carregando produtos...</p>
  }

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      <ListaProdutos produtos={produtos} />
    </div>
  )
}

export default App
