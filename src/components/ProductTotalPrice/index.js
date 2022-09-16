import { useProduct } from "../../context/ProductContext";
import AddToCartButton from "../../components/AddToCartButton/index";
import { TypeTitle, TotalPrice } from "./style";
import ShippingIcon from "../../assets/shipping.svg";

function Total() {
  const { total } = useProduct();
  return (
    <div className="flex items-baseline py-4">
      <TypeTitle className="flex justify-between min-w-[128px]">
        <span className="font-bold">Toplam</span>
        <span>:</span>
      </TypeTitle>
      <div className="flex flex-col justify-start px-3">
        <TotalPrice className="">
          {total.toLocaleString("tr-TR", {
            style: "currency",
            currency: "TRY",
          })}
        </TotalPrice>
        <div>
          <img
            className="inline-flex w-[20px] h-[20px] mr-2"
            src={ShippingIcon}
            alt="shipping"
          />
          <span className="text-gray-700 ">Kargo ücreti:</span>
          <span className="ml-1 text-blue-500 cursor-pointer whitespace-nowrap">
            Alıcı Öder
          </span>
        </div>
        <div className="flex items-baseline">
          <AddToCartButton />
          <span className="ml-3 text-blue-500 cursor-pointer whitespace-nowrap">
            Ödeme Seçenekleri
          </span>
        </div>
      </div>
    </div>
  );
}

export default Total;
