import Link from "next/link";

export default function Contacto() {
  return (
    <main className="main">
      <section className="contact-section section-container">
        <h1>Contacto</h1>
        <div className="content-wrapper">

          <address>
            <div className="contact-item">
              <h4>Teléfono</h4>
              <p>
                <span className="jam jam-phone"></span>
                <Link href="tel:1234567890">(123) - 456 - 7890</Link>
              </p>
            </div>

            <div className="contact-item">
              <h4>Correo electrónico</h4>
              <p>
                <span className="jam jam-newsletter"></span>
                <Link href="mailto:contacto@edsoft.com">contacto@edsoft.com</Link>
              </p>
            </div>

            <div className="contact-item">
              <h4>Redes sociales</h4>
              <div className="social-networks">
                <Link href="#"><span className="jam jam-twitter"></span></Link>
                <Link href="#"><span className="jam jam-facebook"></span></Link>
                <Link href="#"><span className="jam jam-whatsapp"></span></Link>
                <Link href="#"><span className="jam jam-instagram"></span></Link>
              </div>
            </div>
          </address>

        </div>
      </section>
    </main>
  )
}