import Image from "next/image";
import perfil from '../../public/foto-de-perfil.svg'
import banner from '../../public/computer.svg'

export default function Hero() {
  return (
    // <!-- Seccion Hero -->
    <section className="hero align-items-stretch">
      <div className="hero-principal d-flex flex-column justify-content-center align-items-center">
        <Image className="hero-imagen-desarrollador rounded-circle"
          src={perfil} alt="Foto de perfil" />
        <h1 className="display-1">Hola, soy Eduardo Cano</h1>
        <h2 className="h2">Soy un desarrollador web que se especializa en crear y diseñar experiencias digitales excepcionales.</h2>
      </div>
      <div className="hero-inferior">
        <Image className="hero-inferior-imagen img-fluid" src={banner}
          alt="Imagen de pagina principal" />
      </div>
    </section>
  )
}
