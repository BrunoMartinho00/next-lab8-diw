import React from 'react'
import Projeto from '@/components/Projeto/Projeto'

export default function DescricaoProjetos() {
  const githubPagesUrl = 'https://brunomartinho00.github.io/'

  return (
    <section className="space-y-4">
      <p className="text-gray-800 dark:text-gray-200">Aqui apresento alguns projetos que desenvolvi durante esta disciplina. Pode ver todos os meus projetos na minha <a href={githubPagesUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">homepage do GitHub Pages</a>.</p>

      <div className="space-y-2">
        <Projeto name="Loja (projeto da loja)" url={`${githubPagesUrl}loja`} />
        <Projeto name="Site com JavaScript Interativo" url={`${githubPagesUrl}site-js`} />
        <Projeto name="Outro Projeto (exemplo)" url={`${githubPagesUrl}outro-projeto`} />
      </div>
    </section>
  )
}
