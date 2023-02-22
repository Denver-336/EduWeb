import Link from 'next/link'

export default function Contacto () {
  return (
    <>
      <section id='contacto' className='contacto seccion-oscura'>
        <div className='container'>
          <div className='container text-center rectangulo d-flex justify-content-evenly'>
            <div className='row'>
              <div className='col-12 col-md-4 seccion-titulo'>
                {/* // <!-- Button trigger modal --> */}
                <button type='button' className='btn btn-primary' data-bs-toggle='modal' data-bs-target='#exampleModal'>
                  ¡Escríbeme!
                </button>
              </div>
              <div className='col-12 col-md-4 descripcion'>
                Contáctame para iniciar tu proyecto de desarrollo web y haré que tu visión se vuelva realidad.
              </div>
              <div className='col-12 col-md-4'>
                <br />
                <div className='iconos-redes-sociales d-flex flex-wrap align-items-center justify-content-center'>
                  <a className='link-light' type='button' data-bs-toggle='modal' data-bs-target='#exampleModal'>
                    <i className='bi bi-envelope-fill' />
                  </a>
                  <Link
                    href='https://www.linkedin.com/in/canoeduardo/' target='_blank' rel='noopener noreferrer'
                    className='link-light'
                  >
                    <i className='bi bi-linkedin' />
                  </Link>
                  <Link href='https://github.com/Denver-336' target='_blank' rel='noopener noreferrer' className='link-light'>
                    <i className='bi bi-github' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* // <!-- Modal --> */}
      <div className='modal fade' id='exampleModal' tabIndex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLabel'>Trabajemos juntos</h5>
              <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close' />
            </div>
            <div className='modal-body'>
              <form id='mensaje' action='https://formsubmit.co/58460838dbbda6f0f3d986fa29b6150b' method='POST'>
                <div className='mb-3'>
                  <label htmlFor='exampleFormControlInput1' className='form-label'>Nombre</label>
                  <input type='texto' className='form-control' id='exampleFormControlInput1' name='name' required defaultValue='' />
                </div>
                <div className='mb-3'>
                  <label htmlFor='exampleFormControlInput1' className='form-label'>Correo</label>
                  <input type='email' className='form-control' id='exampleFormControlInput1' name='email' required defaultValue='' />
                </div>
                <div className='mb-3'>
                  <label htmlFor='exampleFormControlTextarea1' className='form-label'>Mensaje</label>
                  <textarea className='form-control' id='exampleFormControlTextarea1' rows='3' name='comments' defaultValue='' />
                </div>
                <input type='hidden' name='_captcha' value='false' />
                {/* <input type='hidden' name='_next' value='https://yourdomain.co/thanks.html' /> */}
              </form>
            </div>
            <div className='modal-footer justify-content-start'>
              <button type='submit' className='btn btn-primary' form='mensaje'>Enviar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
