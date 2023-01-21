import Image from "next/image";
import Link from "next/link";
import logo from '../public/json.svg'

export default function BarraDeNavegacion() {
  return (
    // Barra de navegacion
    <nav className="navbar navbar-expand-md navbar-light">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar-toggler">
          <Link className="navbar-brand" href="/" >
            <Image src={logo} width="50" alt="Logo de la página web" />
          </Link>
          <ul className="navbar-nav d-flex justify-content-center align-items-center">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/sobre-mi">Sobre mí</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/proyectos">Proyectos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/testimonios">Testimonios</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contacto">Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
