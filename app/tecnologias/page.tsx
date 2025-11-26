import tecnologias from '@/app/data/tecnologias.json'
import TecnologiaCard from '@/components/TecnologiaCard/TecnologiaCard'

export default function TecnologiasPage() {
  const techs = JSON.parse(JSON.stringify(tecnologias)) as Array<{
    title: string
    image: string
    description: string
    rating: number
  }>

  return (
    <main className="p-6">
      <h2 className="text-2xl font-bold mb-6">Tecnologias Exploradas</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {techs.map((t, i) => (
          <TecnologiaCard key={i} index={i} title={t.title} image={t.image} />
        ))}
      </div>
    </main>
  )
}
