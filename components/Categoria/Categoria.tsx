import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

interface CategoriaProps {
  name: string
  image: string
}

export default function Categoria({ name, image }: CategoriaProps) {
  const href = `/categorias/${encodeURIComponent(name)}`
  return (
    <div className="w-40 p-4 bg-white dark:bg-gray-800 rounded shadow flex flex-col items-center">
      <Link href={href} className="flex flex-col items-center">
        <div className="w-20 h-20 flex items-center justify-center">
          <Image src={`/tecnologias/${image}`} alt={name} width={72} height={72} className="object-contain" />
        </div>
        <div className="mt-2 text-sm font-medium text-center">{name}</div>
      </Link>
    </div>
  )
}
