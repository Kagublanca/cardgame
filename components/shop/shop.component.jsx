import styles from "./shop.module.css";
import { useState } from "react";
import ShopItem from "./_partials/shopitem/shopitem.component";
import { toolupgrades, stickUpgrades } from "../../data/upgrades/upgrades";

function Shop() {
  const [shopActive, setShopActive] = useState(false);
  const [tierOneUpgrades, setTierOneUpgrades] = useState(toolupgrades);
  const [tierTwoUpgrades, setTierTwoUpgrades] = useState(stickUpgrades);
  const [upgradeNumber, setUpgradeNumber] = useState(0);

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
        <h1 className={styles.heading}>Tool Upgrades</h1>
        <div className={styles.shopsection}>
          {tierOneUpgrades.map((item, index) => {
            return (
              <ShopItem shopActive={shopActive} upgrade={item} key={index} />
            );
          })}
        </div>
        <h1 className={styles.heading}>Stick Upgrades</h1>
        <div className={styles.shopsection}>
          {tierTwoUpgrades.map((item, index) => {
            return (
              <ShopItem shopActive={shopActive} upgrade={item} key={index} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Shop;
