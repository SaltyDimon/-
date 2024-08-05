'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
    const pathname = usePathname();

    // Проверяем, если путь содержит "/post" (или другой путь, на котором должен быть скрыт заголовок)
    const shouldHideHeader = pathname.startsWith('/post/');

    if (shouldHideHeader) return null;

    return (
        <header>
            <strong>Site name</strong>
            <nav>
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/registration'>Registration</Link>
            </nav>
        </header>
    );
};

export default Header;
