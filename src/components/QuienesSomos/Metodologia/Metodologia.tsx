/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable css-modules/no-unused-class */
import { useEffect, useState } from "react";
import styles from "../QuienesSomos.module.css";
import metodologiaData from "../../../../public/data/metodologia.json"; // Ajusta la ruta si es necesario

export default function Metodologia() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simula la carga de datos desde un archivo JSON
    setData(metodologiaData);
  }, []);

  if (!data) return <div>Cargando...</div>;

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>{data.title}</h2>
      </div>

      <div className={styles.content}>
        {data.sections.map((section, index) => (
          <div key={index}>
            <h3 className={styles.term}>{section.term}</h3>
            {section.definition.map((item, idx) => {
              if (typeof item === "string") {
                return (
                  <h5 key={idx} className={styles.definition}>
                    {item}
                  </h5>
                );
              } else if (item.list) {
                return (
                  <ul key={idx}>
                    {item.list.map((listItem, listIndex) => (
                      <li key={listIndex} className={styles.definition}>
                        {listItem}
                      </li>
                    ))}
                  </ul>
                );
              }
              return null;
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
