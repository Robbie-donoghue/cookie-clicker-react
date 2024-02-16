import { useState } from "react";

import "./App.css";
import Timer from "./components/Timer";
import BigCookie from "./BigCookie";
import { UpgradeShop } from "./UpgradeShop";
import Purchaseditem from "./PurchasedItem";

export default function App() {
  const [count, setCount] = useState(0);
  const [cps, setCps] = useState(1);
  return (
    <main className="main">
      <div className="cookie-container">
        <Timer count={count} setCount={setCount} cps={cps} />
        <BigCookie count={count} setCount={setCount} />
      </div>
      <div className="upgrade-shop">
        <UpgradeShop
          count={count}
          setCount={setCount}
          cps={cps}
          setCps={setCps}
        />
      </div>
    </main>
  );
}
