import styles from "./shopitem.module.css";
import { useContext } from "react";
import { UserContext } from "../../../../usercontext";
import { useState } from "react";

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

  function improveTool(improvement) {
    setUser({
      ...user,
      upgrades: {
        ...user.upgrades,
        woodclick: user.upgrades.woodclick + improvement,
      },
    });
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
      <h4>{upgrade[upgradeNumber].upgradeName}</h4>
      <p>{upgrade[upgradeNumber].upgradeCost.wood}</p>
      <p>{upgrade[upgradeNumber].upgradeCost.stone}</p>
      <p>{upgrade[upgradeNumber].upgradeDesc}</p>
    </div>
  );
}

export default ShopItem;
