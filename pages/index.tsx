import classNames from 'classnames'
import Head from 'next/head'

import { NextPage } from '@/page'
import { trpc } from '@/utils/trpc'
import useSession from '@/utils/useSession'

const HomePage: NextPage = () => {
  const hello = trpc.useQuery(['hello'])
  const { data } = useSession()

  if (!hello.data) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Head>
        <title>Medeski Solutions Starter</title>
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
        <div>
          <p>{hello.data.greeting}</p>
          <p>{data?.user?.email}</p>
        </div>
      </section>

      <main>
        <h1>Welcome to NextJS Starter Template</h1>
      </main>
    </div>
  )
}

export default HomePage
