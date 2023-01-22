import proyecto6 from '../../public/imagenes/proyectos/proyecto6.png'
import Image from "next/image";
import Link from "next/link";

export default function Proyecto6() {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="proyecto">
        <Image src={proyecto6} alt="Proyecto 1" />
        <div className="overlay">
          <p>Proyecto 6</p>
          <div className="iconos-contenedor">
            <Link href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github"></i>
            </Link>
            <Link href="https://www.freecodecamp.org/espanol/" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-laptop"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}