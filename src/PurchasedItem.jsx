import { UpgradeShop } from "./UpgradeShop";
import { useState } from "react";

export default function Purchaseditem({ item, count, setCount, cps, setCps }) {
  //   const [purchasedItems, setPurchasedItems] = useState([]);
  function handlePurchase() {
    if (item.price > count) {
      alert(`You can't buy`);
      return;
    }
    setCount(count - item.price);
    // setPurchasedItems(item);
    setCps(cps + item.increase);
  }

  return <button onClick={handlePurchase}>Buy item </button>;
}
