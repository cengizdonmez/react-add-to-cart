import { useProduct } from "../../context/ProductContext";
import {
  ProductUnitPrice,
  QuantityInfoDescription,
  QuantityText,
} from "./style";

function UnitPrice() {
  const { baremList } = useProduct();
  const maxPrice = Math.max(...baremList.map((item, id) => item.price));
  const minPrice = Math.min(...baremList.map((item, id) => item.price));
  const minimumQuantity = Math.min(
    ...baremList.map((item, id) => item.minimumQuantity)
  );

  return (
    <div className="mb-3">
      <ProductUnitPrice className="">
        {minPrice.toLocaleString("tr-TR", {
          style: "currency",
          currency: "TRY",
        })}
        <span className="mx-2">-</span>
        {maxPrice.toLocaleString("tr-TR", {
          style: "currency",
          currency: "TRY",
        })}
      </ProductUnitPrice>
      <QuantityText> / Adet</QuantityText>

      <QuantityInfoDescription>
        {minimumQuantity} Adet (Minimum Sipariş Adeti)
      </QuantityInfoDescription>
    </div>
  );
}

export default UnitPrice;
