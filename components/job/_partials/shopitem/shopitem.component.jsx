import styles from "./shopitem.module.css";
import { useContext } from "react";
import { UserContext } from "../../../../usercontext";
import { useState } from "react";
import Image from "next/image";

function ShopItem({ image, worker, job }) {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className={styles.wrapper}>
      <p className={styles.header}>{job}</p>
      <div className={styles.innerwrapper}>
        <div>
          <Image src={image} alt="Something" width={50} height={50} />
        </div>
        <p>x{worker}</p>
      </div>
      <div className={styles.buttonwrapper}>
        <button className={styles.button} id={styles.minus}>
          -
        </button>
        <button className={styles.button} id={styles.plus}>
          +
        </button>
      </div>
    </div>
  );
}

export default ShopItem;
