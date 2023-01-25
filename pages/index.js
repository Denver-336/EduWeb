import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Experiencia from "@/components/experiencia/Experiencia";
import Proyectos from "@/components/proyectos/Proyectos";
import Testimonios from "@/components/testimonios/Testimonios";
import Contacto from "@/components/Contacto/contacto";


export default function Home() {
  return (
    <>
      <hr />
      <Hero />
      <hr />
      <About />
      <hr />
      <Experiencia />
      <hr />
      <Proyectos />
      <hr />
      <Testimonios />
      <hr />
      <Contacto />
      <hr />
    </>
  )
}