import proyecto3 from '../../public/images/proyectos/proyecto3.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Proyecto3 () {
  return (
    <div className='col-12 col-md-6 col-lg-4'>
      <div className='proyecto'>
        <Image src={proyecto3} alt='Proyecto 1' />
        <div className='overlay'>
          <p>Ecomerce</p>
          <div className='iconos-contenedor'>
            <Link href='https://github.com/Denver-336/ecommerce' target='_blank' rel='noopener noreferrer'>
              <i className='bi bi-github' />
            </Link>
            <Link href='https://ecommerce-rho-sage.vercel.app/' target='_blank' rel='noopener noreferrer'>
              <i className='bi bi-laptop' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
