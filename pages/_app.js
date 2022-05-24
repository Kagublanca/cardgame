import "../styles/globals.css";
import { UserContext } from "../usercontext";
import { useState, useMemo } from "react";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState({
    userName: "",
    resources: {
      wood: 1000,
      stone: 1000,
      food: 0,
    },
    upgrades: {
      woodclick: 1,
      stoneclick: 1,
      foodclick: 1,
    },
    workers: {
      unemployed: 0,
      lumber: 0,
      miner: 0,
      farmer: 0,
    },
    property: {
      house: 0,
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
