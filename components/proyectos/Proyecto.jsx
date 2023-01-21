import Image from "next/image";
import Link from "next/link";

export default function Proyecto({ nombre, descripcion, img, enlase }) {
  return (
    <article className="card-project">
          <div className="image-container">
            <Image src={img} alt={nombre} priority />
          </div>
          <div>
            <h3>{nombre}</h3>
            <p>{descripcion}</p>
            <Link href={enlase} target="_blank">Ver proyecto</Link>
          </div>
        </article>
  )
}