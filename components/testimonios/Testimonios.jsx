
export default function Testimonios() {
  return (
    // <!-- Testimonios -->
    <section id="testimonios" class="testimonios seccion-clara">
      <h2 class="seccion-titulo">Testimonios</h2>
      <h3 class="seccion-descripcion">Estos son algunos testimonios de mis clientes...</h3>

      {/* <!-- Carrusel --> */}
      <div id="testimonios-carrusel" class="carousel carousel-dark slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="container">
              <img class="testimonio-imagen rounded-circle" src="imagenes/cliente1.svg" alt="Foto de Gino">
                <p class="testimonio-texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel iaculis urna. Fusce a ornare enim, vel interdum turpis. Sed aliquam interdum nisi a placerat.</p>
                <div class="testimonio-info">
                  <p class="cliente">Gino</p>
                  <p class="cargo">Gerente de proyectos en DesarrolloWeb</p>
                </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container">
              <img class="testimonio-imagen rounded-circle" src="imagenes/cliente2.svg" alt="Foto de Nora">
                <p class="testimonio-texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel iaculis urna. Fusce a ornare enim, vel interdum turpis. Sed aliquam interdum nisi a placerat.</p>
                <div class="testimonio-info">
                  <p class="cliente">Nora</p>
                  <p class="cargo">Gerente de DiseñaMiPáginaWeb</p>
                </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container">
              <img class="testimonio-imagen rounded-circle" src="imagenes/cliente3.svg" alt="Foto de Leonardo">
                <p class="testimonio-texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel iaculis urna. Fusce a ornare enim, vel interdum turpis. Sed aliquam interdum nisi a placerat.</p>
                <div class="testimonio-info">
                  <p class="cliente">Leonardo</p>
                  <p class="cargo">Director de AprendeAProgramar</p>
                </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#testimonios-carrusel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Anterior</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#testimonios-carrusel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Siguiente</span>
        </button>
      </div>
    </section>
  )
}
