import styles from "./shopitem.module.css";
import { useContext } from "react";
import { UserContext } from "../../../../usercontext";

function ShopItem({ shopActive, name, cost, desc }) {
  const { user, setUser } = useContext(UserContext);
  function handleClick() {
    if (
      user.resources.wood >= cost.wood &&
      user.resources.stone >= cost.stone
    ) {
      setUser({
        ...user,
        resources: {
          ...user.resources,
          wood: user.resources.wood - cost.wood,
          stone: user.resources.stone - cost.stone,
        },
      });
    }
    return;
  }

  return (
    <div
      className={
        user.resources.wood >= cost.wood && user.resources.stone >= cost.stone
          ? styles.canbuy
          : styles.cannotbuy
      }
      id={shopActive ? styles.active : styles.inactive}
      onClick={handleClick}
    >
      <p className={styles.name}>{name}</p>
      <p className={styles.price}>{cost.wood}</p>
      <p className={styles.price}>{cost.stone}</p>
      <p className={styles.price}>{desc}</p>
    </div>
  );
}

export default ShopItem;
