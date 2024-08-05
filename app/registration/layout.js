import './globals.css'; // импортируйте глобальные стили
import './registration/styles.css'; // импортируйте стили страницы регистрации

export const metadata = {
    title: 'Registration Page',
    description: 'User registration page',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
