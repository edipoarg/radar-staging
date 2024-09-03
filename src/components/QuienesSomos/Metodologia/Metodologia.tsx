import styles from "../QuienesSomos.module.css";
import { metodologia } from "./metodologia";

export default function Metodologia() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>{metodologia.title}</h2>
      </div>

      <div className={styles.content}>
        {Object.entries(metodologia.terms).map(([termName, term]) => {
          return (
            <section key={termName}>
              <h3 className={styles.term}>{termName}</h3>
              <ul>
                {term.definitions.map((definition, index) => (
                  <li key={index}>
                    {definition.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </li>
                ))}
              </ul>
              <ul>
                {term.members.map((member) => (
                  <li key={member}>{member}</li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </section>
  );
}
