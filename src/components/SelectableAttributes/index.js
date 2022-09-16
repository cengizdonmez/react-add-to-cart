import SelectableAttributeOption from "../SelectableAttributesOption";
import { useProduct } from "../../context/ProductContext";
import { SelectableAttribute, AttributesTypeTitle } from "./style";

function SelectableAttributes() {
  const { selectableAttributes } = useProduct();

  return (
    <>
      {selectableAttributes.map((item, i) => (
        <SelectableAttribute className="flex flex-row mb-3" key={i}>
          <AttributesTypeTitle>
            {item.name} <span>:</span>
          </AttributesTypeTitle>
          <div className="grid w-full grid-cols-3 gap-3 text-center">
            {item?.values?.map((val, id) => (
              <SelectableAttributeOption
                attributeId={i}
                key={id}
                value={val}
                item={item}
              />
            ))}
          </div>
        </SelectableAttribute>
      ))}
    </>
  );
}

export default SelectableAttributes;
