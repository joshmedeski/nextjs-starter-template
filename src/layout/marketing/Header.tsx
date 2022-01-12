import classNames from 'classnames'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import HeaderAuth from './HeaderAuth'

const MarketingHeader: React.FC = () => {
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
      <section className="flex justify-between items-center p-4">
        <div className="flex item-center">
          <h1>
            <Link href="/">
              <a className="font-bold">Medeski Solutions Starter</a>
            </Link>
          </h1>

          <nav className="ml-6">
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
            </ul>
          </nav>
        </div>

        <HeaderAuth />
      </section>
    </header>
  )
}

export default MarketingHeader
