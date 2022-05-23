import styles from "./shopitem.module.css";
import { useContext } from "react";
import { UserContext } from "../../../../usercontext";
import { useState } from "react";
import Image from "next/image";

function ShopItem({ shopActive, upgrade }) {
  const { user, setUser } = useContext(UserContext);
  const [upgradeNumber, setUpgradeNumber] = useState(0);
  function handleClick() {
    if (
      user.resources.wood >= upgrade[upgradeNumber].upgradeCost.wood &&
      user.resources.stone >= upgrade[upgradeNumber].upgradeCost.stone
    ) {
      setUser({
        ...user,
        resources: {
          ...user.resources,
          wood: user.resources.wood - upgrade[upgradeNumber].upgradeCost.wood,
          stone:
            user.resources.stone - upgrade[upgradeNumber].upgradeCost.stone,
        },
        upgrades: {
          ...user.upgrades,
          woodclick:
            user.upgrades.woodclick +
            upgrade[upgradeNumber].upgradeFunction.woodImprove,
          stoneclick:
            user.upgrades.stoneclick +
            upgrade[upgradeNumber].upgradeFunction.stoneImprove,
          foodclick:
            user.upgrades.foodclick +
            upgrade[upgradeNumber].upgradeFunction.foodImprove,
        },
      });
      setUpgradeNumber(upgradeNumber + 1);
    }
    return;
  }

  return (
    <div
      className={
        user.resources.wood >= upgrade[upgradeNumber].upgradeCost.wood &&
        user.resources.stone >= upgrade[upgradeNumber].upgradeCost.stone
          ? styles.canbuy
          : styles.cannotbuy
      }
      id={shopActive ? styles.active : styles.inactive}
      onClick={handleClick}
    >
      <h4 className={styles.name}>{upgrade[upgradeNumber].upgradeName}</h4>
      <div className={styles.cost}>
        {upgrade[upgradeNumber].upgradeCost.wood}
        <Image src={"/Clicker_1_Wood.png"} alt="Wood" width={30} height={30} />
      </div>
      <div className={styles.cost}>
        {upgrade[upgradeNumber].upgradeCost.stone}
        <Image src={"/Clicker_1_Stone.png"} alt="Wood" width={30} height={30} />
      </div>
      <p className={styles.desc}>{upgrade[upgradeNumber].upgradeDesc}</p>
    </div>
  );
}

export default ShopItem;
