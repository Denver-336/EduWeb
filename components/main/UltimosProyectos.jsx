import Proyecto1 from "./ultimosProyectos/Proyecto1";
import Proyecto2 from "./ultimosProyectos/Proyecto2";
import Proyecto3 from "./ultimosProyectos/Proyecto3";
import Proyecto4 from "./ultimosProyectos/Proyecto4";

export default function UltimosProyectos() {
  return (
    <section className="section-container last-projects">
      <h2>Últimos proyectos</h2>
      <div className="content-wrapper">
        <Proyecto1 />
        <Proyecto2 />
        <Proyecto3/>
        <Proyecto4 />
      </div>
    </section>
  )
}