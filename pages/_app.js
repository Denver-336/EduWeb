import Head from 'next/head'
import { NextSeo } from 'next-seo'
import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/globals.css'

export default function App ({ Component, pageProps }) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js')
  }, [])

  return (
    <>
      <Head>
        {/* metadatos */}
        <meta charSet='utf-8' />
        <meta name='author' content='DenveDev' />
        <meta name='keywords' content='HTML, CSS, JavaScript, React, Next.js, Bootstrap' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        {/* favicon */}
        <link rel='icon' href='/images/logo.svg' />
      </Head>
      <NextSeo title='DenveDev | Desarrollo Web' description='Sitio web de DenveDev' />
      <Component {...pageProps} />
    </>
  )
}
