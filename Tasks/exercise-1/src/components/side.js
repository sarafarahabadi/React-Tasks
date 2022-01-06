import React from "react";
import styles from "./styles.module.css";

export default function Side() {
  return (
    <div className={styles.side}>
      <div className={styles.sideTitle}>luetuimmat</div>
      <div>
        <hr />
      </div>
      <div>
        <div className={styles.sideBody}>
          <div className={styles.eachLineNumbers}>1</div>
          <div className={styles.eachLine}>
            Rikosepäilyt | EIT-haijaus: Kuolleeksi väitetyn irakilaismiehen
            tytär valehteli perheen taustoista jo turvaparkkanhakemuksessa
          </div>
        </div>
        <div className={styles.sideBody}>
          <div className={styles.eachLineNumbers}>2</div>
          <div className={styles.eachLine}>
            HS Vantaa | Vantaalle nousi vankilan näköinen päiväkoti, jota
            pilkataan nyt surutta verkossa
          </div>
        </div>
        <div className={styles.sideBody}>
          <div className={styles.eachLineNumbers}>3</div>
          <div className={styles.eachLine}>
            Päivittyvä seuranta | STM: Parasetamolia tai deksametasonia
            sisältävien lääkkeiden myyntiä rajoitetaan - Ministeriö haluaa
            varmistaa valmisteiden riittäävyyden
          </div>
        </div>
        <div className={styles.sideBody}>
          <div className={styles.eachLineNumbers}>4</div>
          <div className={styles.eachLine}>
            Nyt.fi | Harry Styles puki ylleen suomalaisen suunnittelijan
            neuleen. Nyt tätä "mummon tilkkutäkkiä" neulovat kymmenet tuhannet
            ympäriä maailamn soitimme vaatesuunnittelijalle
          </div>
        </div>
      </div>
    </div>
  );
}
