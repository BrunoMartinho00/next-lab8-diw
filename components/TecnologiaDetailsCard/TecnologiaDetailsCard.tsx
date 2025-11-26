 'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ContadorPersonalizado from '@/components/ContadorPersonalizado/ContadorPersonalizado'

interface TecnologiaDetailsCardProps {
  title: string
  image: string
  description: string
  rating: number
}

export default function TecnologiaDetailsCard({ title, image, description, rating }: TecnologiaDetailsCardProps) {
  return (
    <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 shadow rounded-lg p-6">
      <div className="flex flex-col items-center">
        <div className="w-40 h-40 flex items-center justify-center">
          <Image src={`/tecnologias/${image}`} alt={title} width={160} height={160} className="object-contain" />
        </div>
        <h2 className="mt-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">{title}</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>
        <div className="mt-3">Rating: <span className="text-yellow-500">{'★'.repeat(rating)}{'☆'.repeat(5 - rating)}</span></div>
        <div className="mt-2"><ContadorPersonalizado title={title} /></div>
        <div className="mt-4">
          <Link href="/tecnologias"><button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded">Voltar</button></Link>
        </div>
      </div>
    </div>
  )
}
