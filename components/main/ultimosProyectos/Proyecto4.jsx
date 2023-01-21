import Image from "next/image";
import Link from "next/link";
import proyecto4 from '../../../public/imagenes/project-4.jpg'

export default function Proyecto4() {
  return (
    <Link href="#" className="project-item">
      <article>
        <div>
          <h4>Titulo proyecto</h4>
          <p>Descripción proyecto</p>
        </div>
        <div className="image-container">
          <Image src={proyecto4} alt="Proyecto 4" priority />
        </div>
      </article>
    </Link>
  )
}