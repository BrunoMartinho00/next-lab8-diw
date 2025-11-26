import produtos from '@/app/data/produtos.json'
import Produto from '@/components/Produto/Produto'
import React from 'react'

export default function CategoriaDetalhePage({ params }: { params: { name: string } }) {
  const raw = decodeURIComponent(params.name)
  const prods = JSON.parse(JSON.stringify(produtos)) as Array<any>
  const filtered = prods.filter(p => p.category === raw && p.active)

  return (
    <main className="p-6">
      <h2 className="text-2xl font-bold mb-4">Categoria: {raw}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filtered.map(p => <Produto key={p.id} id={p.id} title={p.title} image={p.image} price={p.price} category={p.category} />)}
      </div>
    </main>
  )
}
