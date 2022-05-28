import styles from "./shopitem.module.css";
import { useContext } from "react";
import { UserContext } from "../../../../usercontext";
import { useState } from "react";
import Image from "next/image";

function ShopItem({ image, worker, job }) {
  const { user, setUser } = useContext(UserContext);

  function addWorker(jobtitle, operation) {
    let userReturn;
    if (operation == "add") {
      if (user.workers.unemployed < 1) {
        return;
      }
      switch (jobtitle) {
        case "lumber":
          userReturn = {
            ...user,
            workers: {
              ...user.workers,
              unemployed: user.workers.unemployed - 1,
              lumber: user.workers.lumber + 1,
            },
          };
          break;
        case "miner":
          userReturn = {
            ...user,
            workers: {
              ...user.workers,
              unemployed: user.workers.unemployed - 1,
              miner: user.workers.miner + 1,
            },
          };
          break;
        case "farmer":
          userReturn = {
            ...user,
            workers: {
              ...user.workers,
              unemployed: user.workers.unemployed - 1,
              farmer: user.workers.farmer + 1,
            },
          };
      }
    }
    if (operation == "minus") {
      switch (jobtitle) {
        case "lumber":
          if (user.workers.lumber < 1) {
            return;
          }
          userReturn = {
            ...user,
            workers: {
              ...user.workers,
              unemployed: user.workers.unemployed + 1,
              lumber: user.workers.lumber - 1,
            },
          };
          break;
        case "miner":
          if (user.workers.miner < 1) {
            return;
          }
          userReturn = {
            ...user,
            workers: {
              ...user.workers,
              unemployed: user.workers.unemployed + 1,
              miner: user.workers.miner - 1,
            },
          };
          break;
        case "farmer":
          if (user.workers.farmer < 1) {
            return;
          }
          userReturn = {
            ...user,
            workers: {
              ...user.workers,
              unemployed: user.workers.unemployed + 1,
              farmer: user.workers.farmer - 1,
            },
          };
      }
    }

    setUser(userReturn);
  }

  return (
    <div className={styles.wrapper}>
      <p className={styles.header}>{job}</p>
      <div className={styles.innerwrapper}>
        <div>
          <Image src={image} alt="Something" width={50} height={50} />
        </div>
        <p>x{job == "unemployed" ? user.workers.unemployed : worker}</p>
      </div>
      <div className={styles.buttonwrapper}>
        {job == "unemployed" ? null : (
          <button
            className={styles.button}
            id={styles.minus}
            onClick={() => {
              addWorker(job, "minus");
            }}
          >
            -
          </button>
        )}
        {job == "unemployed" ? null : (
          <button
            className={styles.button}
            id={styles.plus}
            onClick={() => {
              addWorker(job, "add");
            }}
          >
            +
          </button>
        )}
      </div>
    </div>
  );
}

export default ShopItem;
