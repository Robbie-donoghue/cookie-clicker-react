import { upgrades } from "./components/stores/upgrades";
import Purchaseditem from "./PurchasedItem";
export function UpgradeShop({ count, setCount, cps, setCps }) {
  // map through upgrades and create a button to buy on each one, when clicked subtract upgrade.increase from setCount

  return (
    <>
      {upgrades.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p> cost :{item.price}</p>
          <p> Increase : {item.increase}</p>
          <Purchaseditem
            count={count}
            item={item}
            setCount={setCount}
            cps={cps}
            setCps={setCps}
          />
        </div>
      ))}
    </>
  );
}
