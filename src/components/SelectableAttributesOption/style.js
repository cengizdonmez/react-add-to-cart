import tw from "tailwind-styled-components";

export const SelectableAttributesInput = tw.input`
  hidden peer
`;

export const SelectableAttributesLabel = tw.label`
  block px-8 py-3 text-sm border-2 border-gray-300 rounded-sm cursor-pointer whitespace-nowrap peer-checked:border-gray-500 peer-disabled:bg-red-100 peer-disabled:cursor-no-drop
`;
