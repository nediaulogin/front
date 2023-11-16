import Link from "next/link";

export default function Home() {
  return (<>
    <div className="h-screen">
      <nav className='bg-black p-14'>
        <ul className='flex space-x-7 text-zinc-200 justify-end mr-4 items-center'>
          <li className="hover:text-yellow-300 text-2xl">
            <Link href="/">Home</Link>
          </li >
          <li className="hover:text-yellow-300 text-2xl">
            <Link href="/about">Projetos</Link>
          </li>
          <li className="hover:text-yellow-300 text-2xl">
            <Link href="/contact">Empresa</Link>
          </li>
          <li className="hover:text-yellow-300 text-2xl">
            <Link href="/newProject">Contato</Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center justify-center mt-20">
        <h1 className="text-4xl font-bold mr-2 text-black">Bem-vindo ao </h1>
        <h1 className="text-4xl font-bold bg-black text-yellow-500 p-2 rounded-md"> Costs</h1>
        <h2 className=""></h2>

      </div>
    </div>
  </>
  )
}
