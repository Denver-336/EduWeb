import proyecto4 from '../../public/images/proyectos/proyecto4.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Proyecto4 () {
  return (
    <div className='col-12 col-md-6 col-lg-4'>
      <div className='proyecto'>
        <Image src={proyecto4} alt='Proyecto 1' />
        <div className='overlay'>
          <p>El rey del termo</p>
          <div className='iconos-contenedor'>
            <Link href='https://github.com/Denver-336/elreydeltermo' target='_blank' rel='noopener noreferrer'>
              <i className='bi bi-github' />
            </Link>
            <Link href='https://elreydeltermo-production.up.railway.app' target='_blank' rel='noopener noreferrer'>
              <i className='bi bi-laptop' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
