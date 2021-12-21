import Layout from '@/layout/Layout'
import type { AppProps } from 'next/app'
import React from 'react'

import '../styles/globals.css'

function App({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default App
