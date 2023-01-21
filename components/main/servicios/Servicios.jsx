import Servicio from "./servicio";

export default function Servicios() {
  return (
    <section className="services-section section-container">
      <h2>Nuestros servicios</h2>
      <div className="content-wrapper">

        <Servicio nombre='Servicio 1'
          descripcion='Diseñamos tu presencia en internet con apariencia profesional' />

        <Servicio nombre='Servicio 2'
          descripcion='Diseñamos tu presencia en internet con apariencia profesional' />

        <Servicio nombre='Servicio 3'
          descripcion='Diseñamos tu presencia en internet con apariencia profesional' />

      </div>
    </section>
  )
}