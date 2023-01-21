import Image from "next/image";
import banner from '../../public/computer.svg'
import section from '../../public/bg-section.svg'

export default function Banner() {
  return (
    // seccion principal
    <section className="hero align-items-stretch">
      <div className="hero-principal flex-column d-flex justify-content-center align-items-center">
        <Image className="hero-imagen-desarrollador rounded-circle" src={banner} alt="Logo DenveDev" />
        <h1>Hola, soy Eduardo Cano</h1>
        <h2>Soy un desarrollador web que se especializa en crear y diseñar experiencias digitales excepcionales.</h2>
      </div>
      <div className="hero-inferior" >
        <Image className="hero-inferior-imagen img-fluid" src={section} alt="Equipo de desarrollo" />
      </div>
    </section>
  )
}