import proyecto1 from '../../public/images/proyectos/proyecto1.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Proyecto1 () {
  return (
    <div className='col-12 col-md-6 col-lg-4'>
      <div className='proyecto'>
        <Image src={proyecto1} alt='Proyecto 1' />
        <div className='overlay'>
          <p>EDsoft</p>
          <div className='iconos-contenedor'>
            <Link href='https://github.com/Denver-336/DenveDev' target='_blank' rel='noopener noreferrer'>
              <i className='bi bi-github' />
            </Link>
            <Link href='https://denve-dev.vercel.app/' target='_blank' rel='noopener noreferrer'>
              <i className='bi bi-laptop' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
