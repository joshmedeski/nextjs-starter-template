import classNames from 'classnames'
import NextDocument, {
    DocumentContext,
    Head,
    Html,
    Main,
    NextScript
} from 'next/document'
import React from 'react'

class Document extends NextDocument {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await NextDocument.getInitialProps(ctx)
        return initialProps
    }

    render() {
        return (
            <Html>
                <Head>
                    {/** TODO add apple touch icon */}
                    {/** TODO add favicon */}
                    {/** TODO add site manifest */}
                    {/** TODO add theme color */}
                    {/** TODO add default meta tags */}
                </Head>

                <body
                    className={classNames([
                        'text-black dark:text-white',
                        'bg-white dark:bg-black'
                    ])}
                >
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default Document
