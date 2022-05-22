import styles from "./resourceui.module.css";
import { useContext } from "react";
import { UserContext } from "../../usercontext";

function ResourceUi() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className={styles.resourceuiwrapper}>
      <p>Wood: {user.resources.wood}</p>
      <p>Stone: {user.resources.stone}</p>
      <p>Food: {user.resources.food}</p>
    </div>
  );
}

export default ResourceUi;
