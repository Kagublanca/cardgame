import styles from "./shop.module.css";
import { useState } from "react";
import ShopItem from "./_partials/shopitem/shopitem.component";

function Shop() {
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
        <h1 className={styles.heading}>Tool Upgrades</h1>
        <div className={styles.shopsection}>
          <ShopItem shopActive={shopActive} />
          <ShopItem shopActive={shopActive} />
          <ShopItem shopActive={shopActive} />
          <ShopItem shopActive={shopActive} />
          <ShopItem shopActive={shopActive} />
          <ShopItem shopActive={shopActive} />
          <ShopItem shopActive={shopActive} />
          <ShopItem shopActive={shopActive} />
          <ShopItem shopActive={shopActive} />
        </div>
        <h1>Tool Upgrades</h1>
        <div className={styles.shopsection}>
          <ShopItem shopActive={shopActive} />
          <ShopItem shopActive={shopActive} />
          <ShopItem shopActive={shopActive} />
        </div>
        <h1>Tool Upgrades</h1>
        <div className={styles.shopsection}>
          <ShopItem shopActive={shopActive} />
          <ShopItem shopActive={shopActive} />
          <ShopItem shopActive={shopActive} />
        </div>
        <h1>Tool Upgrades</h1>
        <div className={styles.shopsection}>
          <ShopItem shopActive={shopActive} />
          <ShopItem shopActive={shopActive} />
          <ShopItem shopActive={shopActive} />
        </div>
      </div>
    </div>
  );
}

export default Shop;
