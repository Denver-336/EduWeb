import { Html, Main, NextScript, Head } from 'next/document'

export default function Document () {
  return (
    <Html lang='es'>
      <Head>
        {/* estilos de fuente */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link href='https://fonts.googleapis.com/css2?family=Rubik+Dirt&family=Share+Tech+Mono&display=swap' rel='stylesheet' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
