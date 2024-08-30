/* eslint-disable css-modules/no-unused-class */
import styles from "../QuienesSomos.module.css";
import definiciones from "../../../../public/data/definiciones.json";

export default function Definiciones() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Definiciones</h2>
        <h4 className={styles.description}>
          En este punto explicamos lo que entendemos por algunos términos
          repetitivos que usamos cuando investigamos. Son definiciones propias
          desarrolladas en base a nuestra experiencia militante. No tienen que
          ser académicas ni consensuadas, es más que todo para que el público
          conozca nuestro vocabulario de intervención.
        </h4>
      </div>
      <div className={styles.content}>
        {definiciones.map((item, index) => (
          <div key={index}>
            <h3 className={styles.term}>{item.termino}:</h3>
            <h5 className={styles.definition}>{item.definicion}</h5>
          </div>
        ))}
      </div>
    </section>
  );
}
