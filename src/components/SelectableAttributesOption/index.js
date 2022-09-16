import { useProduct } from "../../context/ProductContext";
import { useEffect, useState } from "react";
import { SelectableAttributesInput, SelectableAttributesLabel } from "./style";

function SelectableAttributeOption({ value, item }) {
  const [isDisabled, setIsDisabled] = useState(false);
  const {
    selectedAttributes,
    setSelectedAttributes,
    products,
    selectableAttributes,
    setLastChoices,
  } = useProduct();

  useEffect(() => {
    if (selectedAttributes.length === selectableAttributes.length - 1) {
      setLastChoices((before) => {
        setIsDisabled(
          !before.some((productItem) =>
            productItem.attributes.some(
              (attribute) =>
                attribute.name === item.name && attribute.value === value
            )
          )
        );
        return products;
      });
    }
  }, [
    item.name,
    products,
    selectableAttributes.length,
    selectedAttributes,
    setLastChoices,
    value,
  ]);

  const changeHandle = (e) => {
    if (selectedAttributes.length < 1) {
      setSelectedAttributes((before) => [
        ...before,
        { name: item.name, value, selectable: true },
      ]);
    } else {
      selectedAttributes.forEach((element, index) => {
        if (element.name !== item.name) {
          setSelectedAttributes((before) => [
            ...before,
            { name: item.name, value, selectable: true },
          ]);
        } else {
          let attrArray = [...selectedAttributes];
          attrArray[index] = { name: item.name, value, selectable: true };
          setSelectedAttributes(attrArray);
        }
      });
    }

    if (item?.name === selectableAttributes[0]?.name) {
      setSelectedAttributes([{ name: item.name, value, selectable: true }]);
    }
  };

  return (
    <div>
      <SelectableAttributesInput
        type="radio"
        name={item.name}
        id={`${value}${item.name}`}
        value={value}
        onChange={changeHandle}
        disabled={
          isDisabled &&
          item.name !== selectableAttributes[0].name &&
          value !== selectableAttributes[0].value
        }
        checked={selectedAttributes.some(
          (attr) => attr.value === value && attr.name === item.name
        )}
      />
      <SelectableAttributesLabel htmlFor={`${value}${item.name}`}>
        {value}
      </SelectableAttributesLabel>
    </div>
  );
}

export default SelectableAttributeOption;
