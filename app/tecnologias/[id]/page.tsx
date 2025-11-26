import TecnologiaDetailsCard from '@/components/TecnologiaDetailsCard/TecnologiaDetailsCard'
import tecnologias from '@/app/data/tecnologias.json'

export default function TecnologiaPage({ params }: { params: { id: string } }) {
  const idx = Number(params.id)
  if (Number.isNaN(idx) || idx < 0 || idx >= tecnologias.length) {
    return (
      <main className="p-6">
        <h2 className="text-2xl font-bold mb-6">Tecnologia não encontrada</h2>
        <p>O índice fornecido não corresponde a nenhuma tecnologia.</p>
      </main>
    )
  }

  const tech = tecnologias[idx]

  return (
    <main className="p-6">
      <TecnologiaDetailsCard title={tech.title} image={tech.image} description={tech.description} rating={tech.rating} />
    </main>
  )
}
