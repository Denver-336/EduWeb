import Image from "next/image";
import Link from "next/link";
import proyecto3 from '../../../public/imagenes/project-3.jpg'

export default function Proyecto3() {
  return (
    <Link href="#" className="project-item">
      <article>
        <div>
          <h4>Titulo proyecto</h4>
          <p>Descripción proyecto</p>
        </div>
        <div className="image-container">
          <Image src={proyecto3} alt="Proyecto 3" priority />
        </div>
      </article>
    </Link>
  )
}