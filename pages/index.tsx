import classNames from 'classnames'
import Head from 'next/head'

import { NextPage } from '~/page'

const HomePage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>NextJS Starter Template</title>
        <meta
          name="description"
          content="Starting point for building a NextJS app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="py-20">
        <h1
          className={classNames([
            'text-center',
            'text-4xl sm:text-5xl',
            'leading-none font-extrabold tracking-tight',
            'sm:mt-10 mb-8 sm:mt-14 sm:mb-10'
          ])}
        >
          The <span className="text-primary-500">starting point</span>
          <br />
          for your next app
        </h1>
      </section>

      <main>
        <h1>Welcome to NextJS Starter Template</h1>
      </main>
    </div>
  )
}

export default HomePage
