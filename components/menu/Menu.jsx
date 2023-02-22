import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/images/eduweb.svg'

export default function BarraDeNavegacion () {
  return (
    <nav className='navbar sticky-top navbar-expand-sm navbar-light bg-light'>
      <div className='container-fluid'>
        <Image src={logo} alt='logo' />
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav m-auto mb-2 mb-sm-0'>
            <li className='nav-item'>
              <Link className='nav-link' id='nav' aria-current='page' href='/'>Inicio</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' href='#proyectos'>Proyectos</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' href='#sobre-mi'>Sobre mí</Link>
            </li>
          </ul>
          <Link className='btn btn-primary menu_btn' type='button' href='#contacto'>Trabajemos juntos</Link>
        </div>
      </div>
    </nav>
  )
}
