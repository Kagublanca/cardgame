import styles from "./job.module.css";
import { useState } from "react";
import ShopItem from "./_partials/shopitem/shopitem.component";
import { toolupgrades, stickUpgrades } from "../../data/upgrades/upgrades";

function Job() {
  const [shopActive, setShopActive] = useState(false);

  function handleClick() {
    setShopActive(!shopActive);
  }

  return (
    <div
      className={styles.shopwrapper}
      id={shopActive ? styles.active : styles.inactive}
    >
      <div
        className={styles.shopbutton}
        onClick={handleClick}
        id={shopActive ? styles.buttonactive : styles.buttoninactive}
      >
        <h1
          className={styles.text}
          id={shopActive ? styles.textactive : styles.textinactive}
        ></h1>
      </div>
      <div className={styles.shopitems}>
        <h1 className={styles.heading}>Settlement Population</h1>
      </div>
    </div>
  );
}

export default Job;
