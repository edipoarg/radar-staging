import styles from "../QuienesSomos.module.css";
import definiciones from "../../../../public/data/definiciones.json";

type Definicion = {
  termino: string;
  definicion: string;
};

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
        <ul className={styles.list}>
          {definiciones.map((item: Definicion, index: number) => (
            <li key={index} className={styles.listItem}>
              <h3 className={styles.term}>{item.termino}:</h3>
              <h5 className={styles.definition}>{item.definicion}</h5>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
