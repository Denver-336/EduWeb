import Proyecto from "@/components/proyectos/Proyecto";
import img1 from '../public/imagenes/project-1.jpg'
import img2 from '../public/imagenes/project-2.jpg'
import img3 from '../public/imagenes/project-3.jpg'
import img4 from '../public/imagenes/project-4.jpg'

export default function Proyectos() {
  return (
    <main className="main">
      <section className="projects-section section-container">
        <h1>Nuestros Proyectos</h1>
        <div className="content-wrapper">

          <Proyecto nombre='Proyecto1'
            img={img1}
            enlase='https://australia.gov.au'
            descripcion='Construcción de aplicación web para nuestro cliente en Australia' />

          <Proyecto nombre='Proyecto2'
            img={img2}
            enlase='https://australia.gov.au'
            descripcion='Construcción de aplicación web para nuestro cliente en Australia' />

          <Proyecto nombre='Proyecto3'
            img={img3}
            enlase='https://australia.gov.au'
            descripcion='Construcción de aplicación web para nuestro cliente en Australia' />

          <Proyecto nombre='Proyecto4'
            img={img4}
            enlase='https://australia.gov.au'
            descripcion='Construcción de aplicación web para nuestro cliente en Australia' />

          <Proyecto nombre='Proyecto5'
            img={img1}
            enlase='https://australia.gov.au'
            descripcion='Construcción de aplicación web para nuestro cliente en Australia' />

          <Proyecto nombre='Proyecto6'
            img={img2}
            enlase='https://australia.gov.au'
            descripcion='Construcción de aplicación web para nuestro cliente en Australia' />

        </div>
      </section>
    </main>
  )
}