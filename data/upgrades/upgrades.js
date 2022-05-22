import { useContext } from "react";
import { UserContext } from "../../usercontext";

export const toolupgrades = [
  [
    {
      upgradeName: "Sharp Axes",
      upgradeCost: { wood: 50, stone: 50 },
      upgradeDesc: "Something goes here",
      upgradeFunction: improveSkill,
    },

    {
      upgradeName: "Cooler Axes",
      upgradeCost: { wood: 50, stone: 50 },
      upgradeDesc: "Something cooler goes here lmao",
      upgradeFunction: improveSkill,
    },
  ],
  [
    {
      upgradeName: "Cool PickAxes",
      upgradeCost: { wood: 50, stone: 50 },
      upgradeDesc: "Something goes here",
      upgradeFunction: improveSkill,
    },
    {
      upgradeName: "Cool PicsasdasdkAxes",
      upgradeCost: { wood: 50, stone: 50 },
      upgradeDesc: "Somethingasdasd goes here",
      upgradeFunction: improveSkill,
    },
  ],
];

function improveSkill(amount) {
  const { user, setUser } = useContext(UserContext);
  console.log(user);
}
