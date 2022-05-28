import styles from "./resourceui.module.css";
import { useContext } from "react";
import { UserContext } from "../../usercontext";
import Image from "next/image";

function ResourceUi() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className={styles.uiwrapper}>
      <div className={styles.resourceuiwrapper}>
        <div className={styles.resource}>
          <Image
            src={"/Clicker_1_Wood.png"}
            alt="Logs of wood"
            width={50}
            height={50}
          />
          <p>
            {user.resources.wood}
            <span className={styles.resourceamount}>
              ({user.upgrades.woodclick})
            </span>
          </p>
        </div>
        <div className={styles.resource}>
          <Image
            src={"/Clicker_1_Stone.png"}
            alt="Logs of wood"
            width={50}
            height={50}
          />
          <p>
            {user.resources.stone}
            <span className={styles.resourceamount}>
              ({user.upgrades.stoneclick})
            </span>
          </p>
        </div>
        <div className={styles.resource}>
          <Image
            src={"/Clicker_1_Food.png"}
            alt="Logs of wood"
            width={50}
            height={50}
          />
          <p>
            {user.resources.food}
            <span className={styles.resourceamount}>
              ({user.upgrades.foodclick})
            </span>
          </p>
        </div>
      </div>
      <div className={styles.propertyuiwrapper}>
        <div className={styles.resource}>
          <Image
            src={"/Home_Icon.png"}
            alt="Logs of wood"
            width={50}
            height={50}
          />
          <p>{user.property.house}</p>
        </div>
        <div className={styles.resource}>
          <Image
            src={"/Clicker_1_Stick.png"}
            alt="Logs of wood"
            width={50}
            height={50}
          />
          <p>{user.workers.unemployed}</p>
        </div>
      </div>
    </div>
  );
}

export default ResourceUi;
