import Image from 'next/image'
import perfil from '../../public/images/foto-de-perfil.svg'

export default function Banner () {
  return (
    <>
      <div className='bg-banner container-fluid pb-4 pt-0 pt-sm-5 pb-sm-5 mb-sm-3'>
        <div className='card sm-3  bg-transparent'>
          <div className='row g-0'>
            <div className='col-sm-6 d-flex align-items-center bg-title'>
              <div className='card-body'>
                <h5 className='card-title text-sm-start text-center'>Hola, soy Eduardo Cano</h5>
                <p className='card-title text-sm-start text-center'>Soy un desarrollador web que se especializa en crear y diseñar experiencias digitales excepcionales.</p>
                <div className='d-grid gap-2 d-sm-flex justify-content-sm-start mt-3'>
                  <button type='button' className='btn btn-secondary'>Mira mis proyectos</button>
                  <button type='button' className='btn btn-outline-primary d-none d-sm-block'>Trabajemos juntos&nbsp;
                    <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-arrow-right-short' viewBox='0 0 16 16'>
                      <path fillRule='evenodd' d='M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z' />
                    </svg>
                  </button>
                </div>
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
