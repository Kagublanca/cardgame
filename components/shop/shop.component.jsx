import styles from "./shop.module.css";
import { useState } from "react";
import ShopItem from "./_partials/shopitem/shopitem.component";
import { toolupgrades } from "../../data/upgrades/upgrades";

function Shop() {
  const [shopActive, setShopActive] = useState(false);
  const [tierOneUpgrades, setTierOneUpgrades] = useState(toolupgrades);

  function handleClick() {
    setShopActive(!shopActive);
    console.log(toolupgrades);
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
              <ShopItem
                shopActive={shopActive}
                cost={item.upgradeCost}
                name={item.upgradeName}
                desc={item.upgradeDesc}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Shop;
