import ProductBaremList from "../ProductBaremList/index";
import ProdcutQuantityOption from "../ProductQuantityOption/index";
import { QuantityCalculator } from "./style";

function Calculator() {
  return (
    <QuantityCalculator className="py-3 pr-3 bg-gray-100 quantity-calculator">
      <ProductBaremList />
      <ProdcutQuantityOption />
    </QuantityCalculator>
  );
}

export default Calculator;
