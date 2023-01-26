import Link from "next/link"

export default function contacto() {
  return (
    <section id="contacto" className="contacto seccion-oscura">
      <div className="container">
        <div className="container text-center rectangulo d-flex justify-content-evenly">
          <div className="row">
            <div className="col-12 col-md-4 seccion-titulo">
              ¡Escríbeme!
            </div>
            <div className="col-12 col-md-4 descripcion">
              Contáctame para iniciar tu proyecto de desarrollo web y haré que tu visión se vuelva realidad.
            </div>
            <div className="col-12 col-md-4">
              <br />
              <Link href="mailto:canoeduardojesus@gmail.com" className="link-light fw-bold">
                canoeduardojesus@gmail.com
              </Link><br /><br />
              <div className="iconos-redes-sociales d-flex flex-wrap align-items-center justify-content-center">
                <Link href="https://mail.google.com/mail" target="_blank" rel="noopener noreferrer" className="link-light">
                  <i className="bi bi-envelope"></i>
                </Link>
                <Link href="https://www.linkedin.com/in/canoeduardo/" target="_blank" rel="noopener noreferrer"
                  className="link-light">
                  <i className="bi bi-linkedin"></i>
                </Link>
                <Link href="https://github.com/Denver-336" target="_blank" rel="noopener noreferrer" className="link-light">
                  <i className="bi bi-github"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
