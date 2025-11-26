import categorias from '@/app/data/categorias.json'
import Categoria from '@/components/Categoria/Categoria'

export default function CategoriasPage() {
  const cats = JSON.parse(JSON.stringify(categorias)) as Array<{ name: string; image: string }>

  return (
    <main className="p-6">
      <h2 className="text-2xl font-bold mb-6">Categorias</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {cats.map(c => <Categoria key={c.name} name={c.name} image={c.image} />)}
      </div>
    </main>
  )
}
