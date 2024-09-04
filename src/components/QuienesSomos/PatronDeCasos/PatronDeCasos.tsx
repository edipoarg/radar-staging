import styles from "../QuienesSomos.module.css";
import { patronDeCasos } from "./patronDeCasos";

export default function PatronDeCasos() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>{patronDeCasos.title}</h2>
      </div>

      <div className={styles.content}>
        {Object.entries(patronDeCasos.categories).map(
          ([categoryName, category]) => {
            return (
              <div key={categoryName}>
                <h3>{categoryName}</h3>
                {Object.entries(category.terms).map(([termName, termValue]) => (
                  <div key={termName}>
                    <h4>{termName}</h4>
                    {termValue.definitions.map((definition) =>
                      definition.paragraphs.map((paragraph) => (
                        <h5 key={paragraph} className={styles.description}>
                          {paragraph}
                        </h5>
                      )),
                    )}
                    <ul>
                      {termValue.members.map((item) => (
                        <li key={item} className={styles.definition}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            );
          },
        )}
      </div>
    </section>
  );
}
