
export default function Experiencia() {
  return (
    // <!-- Experiencia -->
    <section className="experiencia seccion-clara">
      <div className="container text-center">
        <div className="row">
          {/* <!-- Desarrollo web Front-end --> */}
          <div className="columna col-12 col-md-4">
            <i className="bi bi-laptop"></i>
            <p className="experiencia-titulo">Desarrollo web Front-end</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet, odio eget fringilla scelerisque, sem purus fringilla mauris, nec ultricies nisl nisl sit amet dolor. </p>
            <div className="badges-contenedor">
              <span className="badge text-bg-primary">HTML</span>
              <span className="badge text-bg-primary">CSS</span>
              <span className="badge text-bg-primary">JavaScript</span>
              <span className="badge text-bg-primary">Sass</span>
              <span className="badge text-bg-primary">Bootstrap</span>
              <span className="badge text-bg-primary">React</span>
            </div>
          </div>
          {/* <!-- Desarrollo web Back-End --> */}
          <div className="columna col-12 col-md-4">
            <i className="bi bi-pc"></i>
            <p className="experiencia-titulo">Desarrollo web Back-End</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet, odio eget fringilla scelerisque, sem purus fringilla mauris, nec ultricies nisl nisl sit amet dolor. </p>
            <div className="badges-contenedor">
              <span className="badge text-bg-primary">Next.js</span>
              <span className="badge text-bg-primary">Node.js</span>
              <span className="badge text-bg-primary">Express.js</span>
              <span className="badge text-bg-primary">MongoDB</span>
            </div>
          </div>
          {/* <!-- Estudiante --> */}
          <div className="columna col-12 col-md-4">
            <i className="bi bi-journal-code"></i>
            <p className="experiencia-titulo">Estudios</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet, odio eget fringilla scelerisque, sem purus fringilla mauris, nec ultricies nisl nisl sit amet dolor. </p>
            <div className="badges-contenedor">
              <span className="badge text-bg-primary">EDteam</span>
              <span className="badge text-bg-primary">FreeCodeCamp</span>
              <span className="badge text-bg-primary">YouTube</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
