import BackEnd from './BackEnd'
import Estudios from './Estudios'
import FrontEnd from './FrontEnd'

export default function Experiencia () {
  return (
    // <!-- Experiencia -->
    <section className='experiencia seccion-clara'>
      <div className='container text-center'>
        <div className='row'>
          <FrontEnd />
          <BackEnd />
          <Estudios />
        </div>
      </div>
    </section>
  )
}
