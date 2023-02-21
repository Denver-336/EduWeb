import proyecto5 from '../../public/images/proyectos/proyecto5.png'
import Image from "next/image";
import Link from "next/link";

export default function Proyecto5() {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="proyecto">
        <Image src={proyecto5} alt="Proyecto 1" />
        <div className="overlay">
          <p>Marvel</p>
          <div className="iconos-contenedor">
            <Link href="https://github.com/Denver-336/edutube" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github"></i>
            </Link>
            <Link href="https://edutube.vercel.app" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-laptop"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
