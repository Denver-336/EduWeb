import Image from 'next/image'
import Link from 'next/link'
import logo from 'public/json.svg'

export default function Header() {
  return (
    <header >
      {/* barra de navegacion */}
      <nav className="navbar navbar-expand-md navbar-ligth" >
        <div className="container-fluid">
          {/* boton de menu desplegable */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler"
            aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar-toggler">
            {/* logo */}
            <a className="navbar-brand" href="/">
              <Image src={logo} alt="Logo DenveDev" width="50" />
            </a>
            {/* menu */}
            <ul className="navbar-nav d-flex justify-content-center align-items-center">
              <li className="nav-item">
                <Link className="nav-link" href="/">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/sobre-mi">Sobre mí</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/proyectos">Proyectos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/">Testimonios</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/contacto">Contacto</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}