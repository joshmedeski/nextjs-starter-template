import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

import GitHubIcon from '~/branding/GitHubIcon'

const Header: React.FC = () => {
  const router = useRouter()
  const nav: { href: string; text: string }[] = [
    { href: '/', text: 'Home' },
    { href: '/features', text: 'Features' },
    { href: '/docs', text: 'Docs' },
    { href: '/blog', text: 'Blog' },
    { href: '/about', text: 'About' }
  ]

  const isCurrent = (href: string) => {
    if (href === '/') {
      return router.pathname === '/'
    } else {
      return router.pathname.startsWith(href)
    }
  }

  return (
    <header className="max-w-screen-xl mx-auto w-full">
      <section className="flex justify-between p-4">
        <h1>
          <Link href="/">
            <a className="font-bold">NextJS Starter Template</a>
          </Link>
        </h1>

        <nav>
          <ul className="flex">
            {nav.map(({ text, href }) => (
              <li key={`${text} header nav`}>
                <Link href={href} passHref>
                  <a
                    href={href}
                    className={classNames([
                      'px-3 py-2',
                      { 'font-bold text-primary-500': isCurrent(href) }
                    ])}
                  >
                    {text}
                  </a>
                </Link>
              </li>
            ))}
            <li>
              <GitHubIcon />
            </li>
          </ul>
        </nav>
      </section>
    </header>
  )
}

const Footer: React.FC = () => {
  return (
    <footer className="max-w-screen-xl mx-auto w-full">
      <div className="p-4 text-center text-gray-500">
        Copyright &copy; {new Date().getFullYear()} Medeski Solutions
      </div>
    </footer>
  )
}

const MarketingLayout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default MarketingLayout
