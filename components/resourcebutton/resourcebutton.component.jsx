import styles from "./resourcebutton.module.css";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../usercontext";
import Image from "next/image";

function ResourceButton({ resource }) {
  const [click, setClick] = useState(true);
  const { user, setUser } = useContext(UserContext);
  const [images, setImages] = useState([
    "/Clicker_1_Rock_Better.png",
    "/Clicker_1_Rock_Better_2.png",
  ]);

  useEffect(() => {
    switch (resource) {
      case "wood":
        setImages([
          "/Clicker_1_Tree_Better.png",
          "/Clicker_1_Tree_Better_2.png",
        ]);
        break;
      case "rock":
        setImages([
          "/Clicker_1_Rock_Better.png",
          "/Clicker_1_Rock_Better_2.png",
        ]);
        break;
      case "food":
        setImages([
          "/Clicker_1_Wheat_Better.png",
          "/Clicker_1_Wheat_Better_2.png",
        ]);
        break;
    }
  }, []);

  function handleClick() {
    setClick(!click);
    switch (resource) {
      case "wood":
        return setUser({
          ...user,
          resources: {
            ...user.resources,
            wood: user.resources.wood + 1,
          },
        });
      case "stone":
        return setUser({
          ...user,
          resources: {
            ...user.resources,
            stone: user.resources.stone + 1,
          },
        });
      case "food":
        return setUser({
          ...user,
          resources: {
            ...user.resources,
            food: user.resources.food + 1,
          },
        });
    }
  }

  return (
    <div className={styles.buttonwrapper}>
      <div className={styles.image}>
        <Image
          src={click ? images[0] : images[1]}
          width={100}
          height={100}
          alt="A tree"
        />
      </div>
      <button
        className={styles.button}
        id={styles[resource]}
        onClick={handleClick}
      >
        {resource}
      </button>
    </div>
  );
}

export default ResourceButton;
