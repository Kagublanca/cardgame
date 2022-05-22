import styles from "./shopitem.module.css";

function ShopItem({ shopActive }) {
  return (
    <div
      id={shopActive ? styles.active : styles.inactive}
      className={styles.shopitemwrapper}
    >
      <p className={styles.name}>Axe Upgrade</p>
      <p className={styles.price}>£5</p>
    </div>
  );
}

export default ShopItem;
