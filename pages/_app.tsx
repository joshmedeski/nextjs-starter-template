import { NextPage } from 'next'
import type { AppProps as NextAppProps } from 'next/app'
import React from 'react'

import { LayoutType, getLayout } from '@/layout'

import '../styles/globals.css'

type AppPage<T> = NextPage<T> & {
    title?: string
    layout?: LayoutType
}

type AppProps = NextAppProps & {
    Component: AppPage<any>
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
