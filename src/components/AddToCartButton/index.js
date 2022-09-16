import { useProduct } from "../../context/ProductContext";
import { AddToCartButton } from "./style";

function AddToCart() {
  const { products, total, quantity } = useProduct();

  const handleClick = () => {
    console.log("Ürünler:", products, "Toplam:", total);
  };

  return (
    <AddToCartButton
      disabled={products.length === 1 && quantity > 0 ? false : true}
      onClick={handleClick}>
      SEPETE EKLE
    </AddToCartButton>
  );
}

export default AddToCart;
