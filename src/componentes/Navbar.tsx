import Link from "next/link"
import Container from "./layout/Container"

const Navbar = () => {
    return (
        <nav className=''>
            <Container>
                <ul className=''>
                    <li>
                        <Link href="/">home</Link>
                    </li>
                    <li>
                        <Link href="/about">sobre</Link>
                    </li>
                    <li>
                        <Link href="/contact">contato</Link>
                    </li>
                    <li>
                        <Link href="/newProject">projeto</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar
