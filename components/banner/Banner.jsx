import Image from 'next/image'
import perfil from '../../public/images/foto-de-perfil.svg'

export default function Banner () {
  return (
    <>
      <div className='bg-banner container-fluid pb-4 pt-3 pt-sm-5 pb-sm-5 mb-sm-3'>
        <div className='card sm-3  bg-transparent'>
          <div className='row g-0'>
            <div className='col-sm-6 d-flex align-items-center bg-title'>
              <div className='card-body'>
                <h5 className='card-title'>Hola, soy Eduardo Cano</h5>
                <p className='card-title'>Soy un desarrollador web que se especializa en crear y diseñar experiencias digitales excepcionales.</p>
                <p className='card-text'><small className='text-muted'>Last updated 3 mins ago</small></p>
              </div>
            </div>
            <div className='col-sm-6'>
              <Image src={perfil} className='img-fluid rounded-start' alt='banner' priority />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
