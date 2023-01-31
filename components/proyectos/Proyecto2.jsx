import proyecto2 from '../../public/imagenes/proyectos/proyecto2.png'
import Image from "next/image";
import Link from "next/link";

export default function Proyecto2() {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="proyecto">
        <Image src={proyecto2} alt="Proyecto 1" />
        <div className="overlay">
          <p>Proyecto 2</p>
          <div className="iconos-contenedor">
            <Link href="https://github.com/Denver-336/formularios" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github"></i>
            </Link>
            <Link href="https://formularios-jade.vercel.app/" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-laptop"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
