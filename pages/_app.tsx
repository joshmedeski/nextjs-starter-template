import { withTRPC } from '@trpc/next'
import type { AppProps as NextAppProps } from 'next/app'
import React from 'react'

import { getLayout } from '@/layout'
import { NextPage } from '@/page'
import { getFullUrl } from '@/utils/url'

import '../styles/globals.css'
import { AppRouter } from './api/trpc/[trpc]'

type AppProps = NextAppProps & {
  Component: NextPage<any>
}

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const Layout = getLayout(pageProps.layout)

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default withTRPC<AppRouter>({
  config({ ctx }) {
    return {
      url: getFullUrl() + '/api/trpc'

      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    }
  },

  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: true,

  /**
   * @link https://trpc.io/docs/nextjs#responsemeta-callback
   */
  responseMeta({ clientErrors, ctx }) {
    if (clientErrors.length) {
      // propagate first http error from API calls
      return {
        status: clientErrors[0].data?.httpStatus ?? 500
      }
    }
    // cache full page for 1 day + revalidate once every second
    const ONE_DAY_IN_SECONDS = 60 * 60 * 24
    return {
      'Cache-Control': `s-maxage=1, stale-while-revalidate=${ONE_DAY_IN_SECONDS}`
    }
  }
})(App)
