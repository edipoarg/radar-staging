/* eslint-disable css-modules/no-unused-class */
import React, { useEffect, useState } from "react";
import styles from "../QuienesSomos.module.css"; // Asegúrate de que la ruta sea correcta
import patronDeCasosData from "../../../../public/data/patronDeCasos.json"; // Ajusta la ruta si es necesario

export default function PatronDeCasos() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simula la carga de datos desde un archivo JSON
    setData(patronDeCasosData);
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
            {section.categories ? (
              section.categories.map((category, catIndex) => (
                <div key={catIndex}>
                  <h4 className={styles.subTerm}>{category.subTerm}</h4>
                  <h5 className={styles.description}>{category.description}</h5>
                  <ul>
                    {category.list.map((item, listIndex) => (
                      <li key={listIndex} className={styles.definition}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <>
                <h5 className={styles.description}>{section.description}</h5>
                <ul>
                  {section.list.map((item, listIndex) => (
                    <li key={listIndex} className={styles.definition}>
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
