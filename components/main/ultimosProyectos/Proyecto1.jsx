import Image from "next/image";
import Link from "next/link";
import poyecto1 from '../../../public/imagenes/project-1.jpg'

export default function Proyecto1() {
  return (
    <Link href="#" className="project-item">
      <article>
        <div>
          <h4>Titulo proyecto</h4>
          <p>Descripción proyecto</p>
        </div>
        <div className="image-container">
          <Image src={poyecto1} alt="Proyecto 1" priority />
        </div>
      </article>
    </Link>
  )
}