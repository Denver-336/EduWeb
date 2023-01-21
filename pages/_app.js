import '../styles/globals.css'
import BarraDeNavegacion from "@/components/menu/BarraDeNavegacion";
import Footer from '@/components/footer/Footer'

export default function App({ Component, pageProps }) {
  return (
    <>
      <BarraDeNavegacion />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
