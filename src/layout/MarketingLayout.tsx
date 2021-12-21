import Link from 'next/link'
import React from 'react'

const Header: React.FC = () => {
    const nav: { href: string; text: string }[] = [
        { href: '/docs', text: 'Docs' },
        { href: '/blog', text: 'Blog' }
    ]

    return (
        <header className="max-w-screen-xl mx-auto w-full">
            <section className="flex justify-between p-4">
                <h1>NextJS Starter Template</h1>
                <nav>
                    <ul className="flex">
                        {nav.map(({ text, href }) => (
                            <li key={`${text} header nav`}>
                                <Link href={href}>
                                    <a className="px-3 py-2">{text}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </section>
        </header>
    )
}

const Footer: React.FC = () => {
    return <footer className="max-w-screen-xl mx-auto w-full"></footer>
}

const MarketingLayout: React.FC = ({ children }) => {
    return (
        <div className="flex flex-col justify-between">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default MarketingLayout
