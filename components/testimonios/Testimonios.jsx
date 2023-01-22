import Image from "next/image";
import cliente1 from '../../public/imagenes/clientes/cliente1.svg'
import cliente2 from '../../public/imagenes/clientes/cliente2.svg'
import cliente3 from '../../public/imagenes/clientes/cliente3.svg'

export default function Testimonios() {
  return (
    // <!-- Testimonios -->
    <section id="testimonios" className="testimonios seccion-clara text-center">
      <h2 className="seccion-titulo display-2">Testimonios</h2>
      <h3 className="seccion-descripcion">Estos son algunos testimonios de mis clientes...</h3>

      {/* <!-- Carrusel --> */}
      <div id="testimonios-carrusel" className="carousel carousel-dark slide mt-5" data-bs-ride="carousel">
        <div className="carousel-inner">

          <div className="carousel-item active">
            <div className="container">
              <Image className="testimonio-imagen rounded-circle" src={cliente1} alt="Foto de Gino" />
              <p className="testimonio-texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel iaculis urna. Fusce a ornare enim, vel interdum turpis. Sed aliquam interdum nisi a placerat.</p>
              <div className="testimonio-info">
                <p className="cliente">Gino</p>
                <p className="cargo">Gerente de proyectos.</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <Image className="testimonio-imagen rounded-circle" src={cliente2} alt="Foto de Nora" />
              <p className="testimonio-texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel iaculis urna. Fusce a ornare enim, vel interdum turpis. Sed aliquam interdum nisi a placerat.</p>
              <div className="testimonio-info">
                <p className="cliente">Nora</p>
                <p className="cargo">Gerente de diseño.</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <Image className="testimonio-imagen rounded-circle" src={cliente3} alt="Foto de Leonardo" />
              <p className="testimonio-texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel iaculis urna. Fusce a ornare enim, vel interdum turpis. Sed aliquam interdum nisi a placerat.</p>
              <div className="testimonio-info">
                <p className="cliente">Leonardo</p>
                <p className="cargo">Director ejecutivo.</p>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#testimonios-carrusel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#testimonios-carrusel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
    </section>
  )
}
