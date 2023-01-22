import { Html, Main, NextScript, Head } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head >
        {/* metadatos */}
        <meta charSet='utf-8' />
        <meta name='author' content='DenveDev' />
        <meta name='description' content='Sitio web de DenveDev' />
        <meta name='keywords' content='HTML, CSS, JavaScript, React, Next.js, Bootstrap' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* titulo */}
        <title>DenveDev | Desarrollo Web</title>
        {/* favicon */}
        <link rel='shortcut icon' href='public\imagenes\json.svg' />
        {/* bootstrap */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
          crossorigin="anonymous" />
        {/* <!-- Iconos de Bootstrap --> */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"></link>
        {/* estilos de fuente */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Rubik+Dirt&display=swap" rel="stylesheet"></link>
      </Head>

      <body>
        <Main />
        {/* bootstrap js */}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
          crossOrigin="anonymous"
        />
        <NextScript />
      </body>

    </Html>
  )
}
