import styles from "./Styles.module.css";
import React, { useState } from "react";

function App() {
  const [carrotCount, setCarrotCount] = useState(0);
  const [bananaCount, setBananaCount] = useState(0);
  const [breadCount, setBreadCount] = useState(0);
  const [eggCount, setEggCount] = useState(0);

  const addCarrots = () => {
    const cart = carrotCount + Math.floor(Math.random() * 10);
    setCarrotCount(cart);
  };
  const addBananas = () => {
    const cart = bananaCount + Math.floor(Math.random() * 10);
    setBananaCount(cart);
  };
  const addBreads = () => {
    const cart = breadCount + Math.floor(Math.random() * 10);
    setBreadCount(cart);
  };
  const addEggs = () => {
    const cart = eggCount + Math.floor(Math.random() * 10);
    setEggCount(cart);
  };

  return (
    <div className={styles.main}>
      <h1>Shopping Cart List</h1>
      <div>
        <div> {carrotCount}x carrots</div>
        <div> {bananaCount}pcs bananas</div>
        <div> {breadCount}x breads</div>
        <div> {eggCount}x eggs</div>
      </div>
      <div>
        <button onClick={addCarrots}>Add Carrots</button>
        <button onClick={addBananas}>Add Bananas</button>
        <button onClick={addBreads}>Add Breads</button>
        <button onClick={addEggs}>Add Eggs</button>
      </div>
    </div>
  );
}

export default App;
