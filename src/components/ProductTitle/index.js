import { useProduct } from "../../context/ProductContext";
import { ProductTitle } from "./style";

const Title = () => {
  const { productTitle } = useProduct();
  return <ProductTitle>{productTitle}</ProductTitle>;
};

export default Title;
