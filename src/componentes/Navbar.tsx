import Link from "next/link"

const Navbar = () => {
    return (<>
        <nav className=''>
            <ul className='flex justify-between'>
                <li className=''>
                    <Link className='' href="/">home</Link>
                </li>
                <li>
                    <Link className='' href="/about">sobre</Link>
                </li>
                <li>
                    <Link className='' href="/contact">contato</Link>
                </li>
                <li>
                    <Link className='' href="/newProject">novo projeto</Link>
                </li>
            </ul>
        </nav>
    </>)
}

export default Navbar
