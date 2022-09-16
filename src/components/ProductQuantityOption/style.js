import tw from "tailwind-styled-components";

export const ProductQuantity = tw.div`
  flex items-center gap-3 text-sm
`;

export const QuantityTypeTitle = tw.span`
  flex justify-between items-center min-w-[128px] text-sm px-3
`;

export const QuantityInput = tw.input`
  p-2 border-2 border-gray-300 rounded-sm w-20
`;
