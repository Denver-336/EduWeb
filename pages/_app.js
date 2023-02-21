import { NextSeo } from 'next-seo'
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import "bootstrap-icons/font/bootstrap-icons.css"
import '../styles/globals.css'
import BarraDeNavegacion from "@/components/menu/BarraDeNavegacion";
import Footer from '@/components/footer/Footer'
import { useEffect } from "react";
import Head from "next/head";

export default function App({ Component, pageProps }) {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <Head >
        {/* metadatos */}
        <meta charSet='utf-8' />
        <meta name='author' content='DenveDev' />
        <meta name='keywords' content='HTML, CSS, JavaScript, React, Next.js, Bootstrap' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* favicon */}
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <NextSeo
        title='DenveDev | Desarrollo Web'
        description='Sitio web de DenveDev'
      />
      <BarraDeNavegacion />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
