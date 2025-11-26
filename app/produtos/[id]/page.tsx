import produtos from '@/app/data/produtos.json'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProdutoPage({ params }: { params: { id: string } }) {
  const id = Number(params.id)
  const prods = JSON.parse(JSON.stringify(produtos)) as Array<any>
  const prod = prods.find(p => p.id === id)

  if (!prod) {
    return (
      <main className="p-6">
        <h2>Produto não encontrado</h2>
        <Link href="/produtos">Voltar aos produtos</Link>
      </main>
    )
  }

  // Manage visibility via localStorage overrides for 'active'. This is done client side
  return (
    <main className="p-6 flex flex-col items-center gap-4">
      <div className="w-64 h-64 bg-white dark:bg-gray-800 shadow rounded-lg p-4 flex items-center justify-center">
        <Image src={`/produtos/${prod.image}`} alt={prod.title} width={250} height={250} className="object-contain" />
      </div>
      <h2 className="text-xl font-bold">{prod.title}</h2>
      <p className="text-gray-600">{prod.description}</p>
      <div className="font-semibold">€{prod.price.toFixed(2)}</div>
      <div className="flex gap-2">
        <Link href="/produtos"><button className="px-4 py-2 bg-blue-600 text-white rounded">Voltar</button></Link>
        <RemoverProdutoButton id={prod.id} />
      </div>
    </main>
  )
}

function RemoverProdutoButton({ id }: { id: number }) {
  // This is a client interactive action; implement simple client-side deletion using localStorage
  'use client'
  const [removed, setRemoved] = React.useState(false)

  React.useEffect(() => {
    try {
      const removedList = JSON.parse(localStorage.getItem('produtos:removed') || '[]') as number[]
      setRemoved(removedList.includes(id))
    } catch (e) {
      setRemoved(false)
    }
  }, [id])

  const toggleRemoved = () => {
    try {
      const removedList = JSON.parse(localStorage.getItem('produtos:removed') || '[]') as number[]
      const exists = removedList.includes(id)
      const newList = exists ? removedList.filter((x: number) => x !== id) : [...removedList, id]
      localStorage.setItem('produtos:removed', JSON.stringify(newList))
      setRemoved(!exists)
    } catch (e) {
      // ignore
    }
  }

  return (
    <button onClick={toggleRemoved} className={`px-4 py-2 rounded ${removed ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}`}>
      {removed ? 'Reapresentar' : 'Remover'}
    </button>
  )
}
