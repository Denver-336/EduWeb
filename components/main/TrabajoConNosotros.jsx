import Link from "next/link";

export default function TrabajaConNosotros() {
  return (
    <section className="work-with-us">
      <div className="content-wrapper">
        <h2 className="title">¿Quieres trabajar con nosotros?</h2>
        <p className="subtitle">Es momento de convertir tu idea en algo real.  Puedes contactarnos en nuestras redes sociales<br /> o enviando un correo a:</p>
        <Link href="mailto:contacto@edsoft.com" className="button">contacto@edsoft.com</Link>
        <div className="social-networks">
          <Link href="#" target="_blank"><span className="jam jam-facebook"></span></Link>
          <Link href="#" target="_blank"><span className="jam jam-twitter"></span></Link>
          <Link href="#" target="_blank"><span className="jam jam-whatsapp"></span></Link>
          <Link href="#" target="_blank"><span className="jam jam-instagram"></span></Link>
        </div>
      </div>
    </section>
  )
}