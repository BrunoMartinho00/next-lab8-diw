import Link from 'next/link'
import React from 'react'

interface CaracteristicaProps {
  texto: string
}

export default function Caracteristica({ texto }: CaracteristicaProps) {
  const href = `/caracteristicas/${encodeURIComponent(texto)}`
  return (
    <div className="p-3">
      <Link href={href} className="text-blue-600 hover:underline">
        {texto}
      </Link>
    </div>
  )
}
