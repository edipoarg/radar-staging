import { NavLink } from "react-router-dom";
import styles from "./QuienesSomos.module.css";
import Navlinks from "../../routes/index";

export default function QuienesSomos() {
  return (
    <section className={styles.section}>
      <div className={styles.title}>Quienes somos</div>

      <NavLink
        to={Navlinks.presentacion}
        title="presentacion"
        className={styles.navLink}
      >
        <h2 className={styles.heading}>Presentación</h2>
      </NavLink>
      <NavLink
        to={Navlinks.definiciones}
        title="definiciones"
        className={styles.navLink}
      >
        <h2 className={styles.heading}>Definiciones</h2>
      </NavLink>
      <NavLink
        to={Navlinks.patronDeCasos}
        title="patronDeCasos"
        className={styles.navLink}
      >
        <h2 className={styles.heading}>Patrón de Casos</h2>
      </NavLink>
      <NavLink
        to={Navlinks.metodologia}
        title="metodologia"
        className={styles.navLink}
      >
        <h2 className={styles.heading}>Metodología</h2>
      </NavLink>
    </section>
  );
}
