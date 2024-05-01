import { RadioButtonElement } from "@/ui/components/RadioButtonElement";
import { VStack } from "@/ui/components/Stack";
import { TextElement } from "@/ui/components/TextElement";

interface StoolScaleSelectorProps {
  selectedValue: number;
  onChange(value: number): void;
}

const StoolScaleOptions = [
  { label: "very hard", value: 1 },
  { label: "hard", value: 2 },
  { label: "a little hard", value: 3 },
  { label: "formed", value: 4 },
  { label: "loose", value: 5 },
  { label: "very loose", value: 6 },
  { label: "watery", value: 7 },
];

export const StoolScaleSelector = ({
  selectedValue,
  onChange,
}: StoolScaleSelectorProps) => {
  return (
    <VStack width={174} gap={8}>
      <TextElement
        textStyle={"TPropertyTitle"}
        cssStyle={{ textAlign: "start", height: "24px" }}
      >
        Stool Scale
      </TextElement>
      {StoolScaleOptions.map(({ label, value }) => (
        <div key={value}>
          <RadioButtonElement
            isSelected={selectedValue === value}
            text={label}
            value={value}
            onChange={onChange}
          ></RadioButtonElement>
        </div>
      ))}
    </VStack>
  );
};
