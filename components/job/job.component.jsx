import styles from "./job.module.css";
import { useState, useContext } from "react";
import { UserContext } from "../../usercontext";
import ShopItem from "./_partials/shopitem/shopitem.component";
import { toolupgrades, stickUpgrades } from "../../data/upgrades/upgrades";
import Image from "next/image";

function Job() {
  const [shopActive, setShopActive] = useState(false);
  const { user, setUser } = useContext(UserContext);

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
        <div className={styles.workerswrapper}>
          <ShopItem
            image={"/Clicker_1_Stick.png"}
            worker={user.workers.lumber}
            job={"lumber"}
          />
          <ShopItem
            image={"/Clicker_1_Stick.png"}
            worker={user.workers.miner}
            job={"miner"}
          />
          <ShopItem
            image={"/Clicker_1_Stick.png"}
            worker={user.workers.farmer}
            job={"farmer"}
          />
          <ShopItem image={"/Clicker_1_Stick.png"} worker={0} />
          <ShopItem image={"/Clicker_1_Stick.png"} worker={0} />
        </div>
      </div>
    </div>
  );
}

export default Job;
