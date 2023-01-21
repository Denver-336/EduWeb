import Nosotros from "@/components/quienesSomos/Nosotros";
import Mision from "@/components/quienesSomos/Mision";
import Vision from "@/components/quienesSomos/Vision";

export default function quienesSomos() {
  return (
    <main className="main">
      <section className="about-us section-container">
        <h1>¿Quienes somos?</h1>
        <div className="content-wrapper">
          <Nosotros />
          <Mision />
          <Vision />
        </div>
      </section>
    </main>
  )
}