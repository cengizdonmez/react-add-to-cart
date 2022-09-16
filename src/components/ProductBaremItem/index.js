import { useEffect } from "react";
import { useProduct } from "../../context/ProductContext";
import valueRound from "../../utils/valueRound";
import { QuantityCalculatorItem } from "./style";

function BaremListItem({ minQuantity, maxQuantity, price, isChecked }) {
  const { quantity, setTotal } = useProduct();

  useEffect(() => {
    if (isChecked) {
      setTotal(valueRound(quantity, price));
    }
  }, [isChecked, price, quantity, setTotal]);

  return (
    <QuantityCalculatorItem>
      <input
        className="hidden peer"
        type="radio"
        id={minQuantity}
        name={minQuantity}
        value={minQuantity}
        disabled={true}
        checked={isChecked}
      />
      <label
        className="block px-3 label peer-checked:bg-amber-100"
        htmlFor={minQuantity}>
        {minQuantity} - {maxQuantity > 2000 ? "2000+" : maxQuantity} <br />
        <span>
          {" "}
          {price.toLocaleString("tr-TR", {
            style: "currency",
            currency: "TRY",
          })}
        </span>
      </label>
    </QuantityCalculatorItem>
  );
}

export default BaremListItem;
