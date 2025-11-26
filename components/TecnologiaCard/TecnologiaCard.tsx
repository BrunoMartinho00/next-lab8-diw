 'use client'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import ContadorPersonalizado from '@/components/ContadorPersonalizado/ContadorPersonalizado'

interface TecnologiaCardProps {
  title: string
  image: string
  index?: number
}

export default function TecnologiaCard({ title, image, index }: TecnologiaCardProps) {
  return (
    <div className="group w-48 h-56 m-2">
      <div className="w-48 h-48 bg-white dark:bg-gray-800 shadow rounded-lg p-4 flex flex-col items-center justify-center group-hover:scale-105 transition-transform">
        <Link href={`/tecnologias/${index ?? 0}`} className="w-full h-full flex flex-col items-center justify-center">
          <div className="flex items-center justify-center w-full h-32">
            <Image src={`/tecnologias/${image}`} alt={title} width={96} height={96} className="object-contain" />
          </div>
          <h4 className="mt-3 text-center font-medium text-gray-700 dark:text-gray-200">{title}</h4>
        </Link>
      </div>
      <div className="flex justify-center mt-2">
        <ContadorPersonalizado title={title} />
      </div>
    </div>
  )
}
