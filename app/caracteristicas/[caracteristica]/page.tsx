import React from 'react'
import TecnologiaCard from '@/components/TecnologiaCard/TecnologiaCard'
import Caracteristica from '@/components/Caracteristica/Caracteristica'
import Link from 'next/link'

export default function CaracteristicaPage({ params }: { params: { caracteristica: string } }) {
  const { caracteristica } = params
  const decoded = decodeURIComponent(caracteristica)

  return (
    <main className="min-h-[70vh] flex items-center justify-center">
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Característica</h2>
        <div className="text-lg text-gray-800 dark:text-gray-200 mb-4">{decoded}</div>
        <div>
          <Link href="/caracteristicas"><button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded">Voltar</button></Link>
        </div>
      </div>
    </main>
  )
}
