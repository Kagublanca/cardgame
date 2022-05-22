import styles from "../styles/Home.module.css";
import ResourceButton from "../components/resourcebutton/resourcebutton.component";
import Shop from "../components/shop/shop.component";
import { useContext } from "react";
import { UserContext } from "../usercontext";
export default function Home() {
  const { user, setUser } = useContext(UserContext);

  const test = {
    a: {
      b: 1,
    },
    c: {
      d: 2,
    },
  };

  return (
    <div>
      <div className={styles.test}>
        <ResourceButton resource={"wood"} />
        <ResourceButton resource={"stone"} />
        <ResourceButton resource={"food"} />
      </div>
      <Shop />
    </div>
  );
}
