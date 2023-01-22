import Link from "next/link";
import Proyecto1 from "./Proyecto1";
import Proyecto2 from "./Proyecto2";
import Proyecto3 from "./Proyecto3";
import Proyecto4 from "./Proyecto4";
import Proyecto5 from "./Proyecto5";
import Proyecto6 from "./Proyecto6";

export default function Proyectos() {
  return (
    // <!-- Proyectos -->
    <section id="proyectos" className="proyectos-recientes seccion-clara d-flex flex-column text-center">
      <h2 className="seccion-titulo texto-negro display-2">Mis proyectos recientes</h2>
      <h3 className="seccion-descripcion h2">Estos son algunos proyectos que he creado recientemente...</h3>

      {/* <!-- Galeria de Proyectos --> */}
      <div className="container text-center proyectos-contenedor">
        <div className="row">
          <Proyecto1 />
          <Proyecto2 />
          <Proyecto3 />
          <Proyecto4 />
          <Proyecto5 />
          <Proyecto6 />
        </div>
      </div>

      <Link href="https://github.com/" target="_blank" rel="noopener noreferrer">
        <button type="button" className="btn btn-info">
          <span className="me-3">Ver más proyectos</span>
          <i className="bi bi-arrow-right-circle-fill"></i>
        </button>
      </Link>

    </section>
  )
}
