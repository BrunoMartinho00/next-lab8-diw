import produtos from '@/app/data/produtos.json'
import Produto from '@/components/Produto/Produto'

export default function ProdutosPage() {
  const prods = JSON.parse(JSON.stringify(produtos)) as Array<{
    id: number
    title: string
    image: string
    price: number
    category: string
    description: string
    active: boolean
  }>

  // We consider localStorage deletions in client-side components; show all here.
  const visible = prods.filter(p => p.active)

  return (
    <main className="p-6">
      <h2 className="text-2xl font-bold mb-6">DEISIshop Produtos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {visible.map(p => (
          <Produto key={p.id} id={p.id} title={p.title} image={p.image} price={p.price} category={p.category} />
        ))}
      </div>
    </main>
  )
}
