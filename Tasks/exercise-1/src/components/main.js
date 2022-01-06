import React from "react";
import styles from "./styles.module.css";
import newsletterImage from "./newsletterImage.PNG";
import coronaChart from "./chart.PNG"

export default function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.headline}>Koronavairus</div>
      <img className={styles.img} src={newsletterImage}></img>
      <h2>HS seuraa</h2>
      <div className={styles.newsheadline}>
        <h3>Päivittyvä seuranta <br></br> STM: Parasetamolia tai deksametasonia sisältävien lääkkeiden myyntiä
          rajoitetaan</h3>
      </div>
      <h4>Number of coronavirus cases in Finland as of December 2021:</h4>
      <img src={coronaChart}></img>
    </div>
  );
}
