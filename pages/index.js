import styles from "../styles/Home.module.css";
import ResourceButton from "../components/resourcebutton/resourcebutton.component";
import Shop from "../components/shop/shop.component";
import { useContext } from "react";
import { UserContext } from "../usercontext";
import ResourceUi from "../components/resourceui/resourceui.component";
export default function Home() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <ResourceUi />
      <div className={styles.test}>
        <ResourceButton resource={"wood"} />
        <ResourceButton resource={"stone"} />
        <ResourceButton resource={"food"} />
      </div>
      <Shop />
    </div>
  );
}
