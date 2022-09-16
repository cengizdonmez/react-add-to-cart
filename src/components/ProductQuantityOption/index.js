import { useProduct } from "../../context/ProductContext";
import { ProductQuantity, QuantityTypeTitle, QuantityInput } from "./style";

function ProductTotalPriceCalculator() {
  const { setQuantity } = useProduct();

  const changeHandle = (e) => {
    if (e.target.value.length > 2) {
      setQuantity(e.target.value);
    }
  };

  return (
    <ProductQuantity>
      <QuantityTypeTitle>
        Adet <span>:</span>
      </QuantityTypeTitle>
      <span>
        <QuantityInput type="number" onChange={changeHandle} min={120} />
      </span>
      <span>Adet</span>

      <span className="p-1 ml-auto text-green-500 bg-slate-50">
        Stok Adeti: <span className="font-semibold">500</span>
      </span>
    </ProductQuantity>
  );
}

export default ProductTotalPriceCalculator;
