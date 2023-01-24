import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import "bootstrap-icons/font/bootstrap-icons.css"
import '../styles/globals.css'
import BarraDeNavegacion from "@/components/menu/BarraDeNavegacion";
import Footer from '@/components/footer/Footer'
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <BarraDeNavegacion />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
