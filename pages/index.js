import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Experiencia from "@/components/experiencia/Experiencia";
import Proyectos from "@/components/proyectos/Proyectos";
import Testimonios from "@/components/testimonios/Testimonios";
import Contacto from "@/components/contacto/Contacto";


export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experiencia />
      <Proyectos />
      <Testimonios />
      <br /><br />
      <Contacto />
    </>
  )
}