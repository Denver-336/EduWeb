import Image from "next/image";
import Link from "next/link";
import proyecto2 from '../../../public/imagenes/project-2.jpg'

export default function Proyecto2() {
  return (
    <Link href="#" className="project-item">
      <article>
        <div>
          <h4>Titulo proyecto</h4>
          <p>Descripción proyecto</p>
        </div>
        <div className="image-container">
          <Image src={proyecto2} alt="Proyecto 2" priority />
        </div>
      </article>
    </Link>
  )
}