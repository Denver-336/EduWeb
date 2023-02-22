import Menu from '../components/menu/Menu'
import Banner from '@/components/banner/Banner'
import Sobremi from '@/components/sobremi/Sobremi'
import Experiencia from '@/components/experiencia/Experiencia'
import Proyectos from '@/components/proyectos/Proyectos'
// import Testimonios from '@/components/testimonios/Testimonios'
import Contacto from '@/components/contacto/Contacto'
import Footer from '../components/footer/Footer'

export default function Home () {
  return (
    <main className='bg-light px-sm-5'>
      <Menu />
      <Banner />
      <hr />
      <Sobremi />
      <hr />
      <Experiencia />
      <Proyectos />
      {/* <Testimonios /> */}
      <br />
      <Contacto />
      <Footer />
    </main>
  )
}
