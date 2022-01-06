import React from "react";
import styles from "./styles.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.row}>HELSINGIN SANOMAT</div>
      <div className={styles.row}>Etusivu</div>
      <div className={styles.row}>Uutiset</div>
      <div className={styles.row}>Lehdet</div>
      <div className={styles.row}>Asiakaspalvelu</div>
    </div>
  );
}
