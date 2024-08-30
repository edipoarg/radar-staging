import styles from "./RedRadar.module.css";
import { useEffect } from "react";
import Navlinks from "../../routes/index";
import Footer from "../Footer/Footer";

export default function RedRadar() {
  useEffect(() => {
    window.scrollTo(0, 0); // Desplázate automáticamente hacia arriba cuando se carga la página
  }, []);

  return (
    <article>
      <section className={styles.conecta}>
        <div>
          <img className={styles.radarDecoImg} src="imgRadar.png" alt="" />
        </div>
        <div className={styles.contectaTituloContainer}>
          <h1 className={styles.conectaTitulo}>
            Registro de Ataques de Derechas Argentinas Radicalizadas
          </h1>
        </div>
        <div>
          <h6 className={styles.conectaTextRadar}>
            <span className={styles.negritaTitulo}>
              RADAR (Registro de Ataques de Derechas Argentinas Radicalizadas)
            </span>
            Red federal en Argentina para el relevamiento, la investigación y la
            elaboración de respuestas con organizaciones locales de distintas
            provincias del país.
          </h6>
        </div>
      </section>
      <section className={styles.conecta2}>
        <h6 className={styles.textConecta2}>
          Entendemos que esta red tiene dos aristas: la nacional y la
          internacional. Para la primera definimos: activar newsletter (en
          principio mensual) a contactos y convocar una reunión con las personas
          que se sumen a la red. Hablamos también sobre armar actividades en
          territorio (presentaciones del proyecto, conversatorios de diversas
          temáticas que confluyen en RADAR). Para la segunda decidimos entablar
          conversaciones con contactos internacionales (como CIPER en Chile) y
          activar posibles colaboraciones.
        </h6>

        <h6 className={styles.siTeInteresa}>
          si querés comunicarte con nosotrxs podés escribirnos a
          <br />
          <br />
          <a href={Navlinks.mailRadar}>radar.edipo@gmail.com</a>
        </h6>
      </section>
      <Footer />
    </article>
  );
}
