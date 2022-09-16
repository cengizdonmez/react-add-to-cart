import ProductTitle from "../../components/ProductTitle/index";
import ProductRating from "../../components/ProductRating/index";
import SelectableAttributes from "../../components/SelectableAttributes/index";
import ProductTotalPrice from "../../components/ProductTotalPrice/index";
import QuantityCalculator from "../../components/QuantityCalculator/index";
import ProductUnitPrice from "../../components/ProductUnitPrice/index";
function ProductDetail() {
  return (
    <div className="product-detail">
      <ProductTitle />
      <ProductRating />
      <ProductUnitPrice />
      <SelectableAttributes />
      <QuantityCalculator />
      <ProductTotalPrice />
    </div>
  );
}

export default ProductDetail;
