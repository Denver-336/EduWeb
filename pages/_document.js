import { Html, Main, NextScript, Head } from 'next/document'

export default function Document() {

  return (
    <Html lang="es">
      <Head >
        {/* metadatos */}
        <meta charSet='utf-8' />
        <meta name='author' content='DenveDev' />
        <meta name='keywords' content='HTML, CSS, JavaScript, React, Next.js, Bootstrap' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* favicon */}
        <link rel='shortcut icon' href='../public/imagenes/json.ico' />
        {/* estilos de fuente */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Rubik+Dirt&family=Share+Tech+Mono&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
