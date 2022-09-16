import { createContext, useContext, useState, useEffect } from "react";
import productData from "../products-data.json";
import filterObject from "../utils/objectsDifference";

const Context = createContext();

const Provider = ({ children }) => {
  const [selectedAttributes, setSelectedAttributes] = useState([]);
  const [images, setImages] = useState();
  const [selectedImage, setSelectedImage] = useState(
    productData.productVariants[1].images[0]
  );
  const productTitle = productData.productTitle;
  const baremList = productData.baremList;
  const [products, setProducts] = useState(productData.productVariants);
  const [quantity, setQuantity] = useState();
  const [total, setTotal] = useState(0);
  const selectableAttributes = productData.selectableAttributes;
  const [lastChoices, setLastChoices] = useState([]);

  useEffect(() => {
    const _products = [];
    const allImageArray = productData.productVariants.flatMap(
      (item) => item.images
    );
    if (selectedAttributes.length === 0) {
      setImages([...new Set(allImageArray)]);
    } else {
      productData.productVariants.forEach((variants) => {
        if (
          filterObject(selectedAttributes, variants.attributes).length === 0
        ) {
          _products.push(variants);
        }
      });
      setProducts(_products);
      setImages([...new Set(_products.flatMap((item) => item.images))]);
      setSelectedImage(
        [...new Set(_products.flatMap((item) => item.images))][0]
      );
    }
  }, [selectedAttributes]);

  const data = {
    selectableAttributes,
    selectedAttributes,
    setSelectedAttributes,
    images,
    setImages,
    products,
    setProducts,
    productTitle,
    baremList,
    selectedImage,
    setSelectedImage,
    quantity,
    setQuantity,
    total,
    setTotal,
    lastChoices,
    setLastChoices,
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export const useProduct = () => useContext(Context);

export default Provider;
