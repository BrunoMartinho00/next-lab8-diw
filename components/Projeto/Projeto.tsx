import React from 'react'

type ProjetoProps = {
  name: string
  url: string
}

export default function Projeto({ name, url }: ProjetoProps) {
  return (
    <p className="text-sm text-gray-700 dark:text-gray-200">
      Projeto: <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{name}</a>
    </p>
  )
}
