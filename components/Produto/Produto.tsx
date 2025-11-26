import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface ProdutoProps {
  id: number
  title: string
  image: string
  price: number
  category: string
}

export default function Produto({ id, title, image, price, category }: ProdutoProps) {
  return (
    <div className="w-56 h-64 bg-white dark:bg-gray-800 shadow rounded-lg p-4 m-2 flex flex-col items-center">
      <Link href={`/produtos/${id}`} className="w-full flex flex-col items-center gap-2">
        <div className="w-full h-36 flex items-center justify-center">
          <Image src={`/produtos/${image}`} alt={title} width={120} height={120} className="object-contain" />
        </div>
        <div className="text-sm font-medium">{title}</div>
        <div className="text-xs text-gray-500">{category}</div>
      </Link>
      <div className="mt-2 font-semibold">€{price.toFixed(2)}</div>
    </div>
  )
}
