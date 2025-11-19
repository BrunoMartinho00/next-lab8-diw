import Image from 'next/image'
import tecnologias from '@/app/data/tecnologias.json'

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
          <article key={i} className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 flex flex-col items-center text-center">
            <Image src={`/tecnologias/${t.image}`} alt={t.title} width={96} height={96} className="object-contain" />
            <h3 className="mt-3 text-lg font-semibold">{t.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{t.description}</p>
            <div className="mt-3">
              <span className="text-sm font-medium">Rating: </span>
              <span className="text-yellow-500 font-bold">{'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}</span>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
