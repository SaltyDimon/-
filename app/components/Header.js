import Link from 'next/link'
const Header = () => {
    return (
        <header>
            <strong>Site name</strong>
            <nav>
                <Link href='/'>Home</Link>
                <Link href='about'>About</Link>
                <Link href='registration'>Registration</Link>
            </nav>
        </header>
    )
}

export default Header