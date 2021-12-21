import type { AppProps as NextAppProps } from 'next/app'
import React from 'react'

import { getLayout } from '@/layout'
import { NextPage } from '@/page'

import '../styles/globals.css'

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

export default App
