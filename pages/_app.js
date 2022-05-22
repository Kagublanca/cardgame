import "../styles/globals.css";
import { UserContext } from "../usercontext";
import { useState, useMemo } from "react";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState({
    userName: "",
    resources: {
      wood: 100,
      stone: 100,
      food: 0,
    },
    upgrades: {
      woodclick: 1,
      stoneclick: 1,
      foodclick: 1,
    },
  });

  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <UserContext.Provider value={providerValue}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default MyApp;
