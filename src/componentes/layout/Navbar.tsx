import Image from "next/image"
import Link from "next/link"
import logo from "../../img/costs_logo.png"

const Navbar = () => {
    return (
        <div className='nav'>

            <Link href="/">
                <Image src={logo} alt="Logo" width={70} height={70} />
            </Link>
            <ul className='nav-ul'>

                <li className="nav-li">
                    <Link href="/">Home</Link>
                </li >
                <li className="nav-li">
                    <Link href="/about">Projetos</Link>
                </li>
                <li className="nav-li">
                    <Link href="/contact">Empresa</Link>
                </li>
                <li className="nav-li">
                    <Link href="/newProject">Contato</Link>
                </li>

            </ul>

        </div>
    )
}

export default Navbar
