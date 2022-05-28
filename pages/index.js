import styles from "../styles/Home.module.css";
import ResourceButton from "../components/resourcebutton/resourcebutton.component";
import Shop from "../components/shop/shop.component";
import Job from "../components/job/job.component";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../usercontext";
import ResourceUi from "../components/resourceui/resourceui.component";
export default function Home() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <ResourceUi />
      <h1 className={styles.townname}>The Hamlet of Hyrule</h1>
      <div className={styles.test}>
        <ResourceButton resource={"wood"} />
        <ResourceButton resource={"stone"} />
        <ResourceButton resource={"food"} />
      </div>
      <Job />
      <Shop />
    </div>
  );
}
