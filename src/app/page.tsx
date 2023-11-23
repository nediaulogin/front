import Image from 'next/image'
import LinkButton from '../componentes/btn/btn'
import saving from '../img/savings.svg'

export default function Home() {
  return (
    <div className="min-h-2/3 h-96 flex-col flex items-center justify-center space-y-8 my-12">

      <h1 className="text-4xl font-bold text-zinc-950">Bem-vindo ao <span
        className="bg-zinc-950 text-yellow-500 p-2 rounded-md">Costs</span></h1>
      <LinkButton to="/newProject" text="Criar projeto" />
      <Image src={saving} alt='img' width={450} height={450} />


    </div>

  )
}
