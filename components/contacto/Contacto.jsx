
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
              <a email="mailto:canoeduardojesus@gmail.com" obfuscate={true}>
              <button type="button">
                  Contacto
                  <i className="bi bi-envelope-check-fill ms-3"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
