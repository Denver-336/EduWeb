import Image from "next/image";
import about2 from '../../public/imagenes/about-2.jpg'

export default function Mision() {
  return (
    <article className="about-item">
      <div className="image-container">
        <Image src={about2} alt="Sobre nosotros" priority />
      </div>
      <div>
        <h2>Misión</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam, neque id tempus consequat, mi nibh luctus nibh, sit amet auctor enim ligula nec arcu. Nulla efficitur elementum euismod. In hac habitasse platea dictumst. Pellentesque habitant egestas.</p>
      </div>
    </article>
  )
}