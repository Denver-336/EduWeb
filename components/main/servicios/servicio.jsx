export default function Servicio({ nombre, descripcion }) {
  return (
    <article className="service-item">
      <span className="jam jam-phone"></span>
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
    </article>
  )
}