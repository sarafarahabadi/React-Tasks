import React from "react";
import styles from "./styles.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerLines}>
        PÄIVÄN TIMANTTI: tutkija kertoo: Näin sota näkyy meissä edelleen
      </div>
      <div className={styles.headerLines}>
        PÄIVÄN TIMANTTI: Harriat Rabb tajusti avioliiton taloudelliset hyödyt ja
        kosi - Näin hän säästäisi aviopuolisona 19200 euroa
      </div>
      <div className={styles.headerad}>
        MAINOS: Faktoille on nyt suurempi tarve kuin koskaan - tutustu Hesariin 2 viikkoa maksutta!
      </div>
    </div>
  );
}
