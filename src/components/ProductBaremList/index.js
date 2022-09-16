import ProductBaremItem from "../ProductBaremItem";
import { useProduct } from "../../context/ProductContext";
import { BaremTypeTitle, ProductBaremList } from "./style";

function BaremList() {
  const { baremList, quantity } = useProduct();
  return (
    <div className="flex mb-4">
      <BaremTypeTitle>
        Toptan Fiyat <br /> (Adet)
        <span>:</span>
      </BaremTypeTitle>
      <ProductBaremList>
        {baremList.map((item, id) => {
          let isChecked = false;
          if (
            item.minimumQuantity <= quantity &&
            quantity <= item.maximumQuantity
          ) {
            isChecked = true;
          }

          return (
            <ProductBaremItem
              key={id}
              minQuantity={item.minimumQuantity}
              maxQuantity={item.maximumQuantity}
              price={item.price}
              isChecked={isChecked}
            />
          );
        })}
      </ProductBaremList>
    </div>
  );
}

export default BaremList;
