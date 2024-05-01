import { RadioButtonElement } from "@/ui/components/RadioButtonElement";
import { HStack, VStack } from "@/ui/components/Stack";
import { TextElement } from "@/ui/components/TextElement";
import { Colors } from "@/ui/theme/ColorPalette";

interface BloodPropertyProps {
  selectedValue: number;
  onChange(value: number): void;
  etc: string;
  onChangeEtc(etc: string): void;
}

export const BloodProperty = ({
  selectedValue,
  onChange,
  etc,
  onChangeEtc,
}: BloodPropertyProps) => {
  return (
    <VStack gap={8}>
      <TextElement
        textStyle={"TPropertyTitle"}
        cssStyle={{ textAlign: "start", height: "24px" }}
      >
        혈변 특성
      </TextElement>
      <HStack>
        <RadioButtonElement
          isSelected={selectedValue === 1}
          text={"붉은 젤리"}
          value={1}
          onChange={onChange}
          cssStyle={{ width: 104 }}
        ></RadioButtonElement>
        <RadioButtonElement
          isSelected={selectedValue === 2}
          text={"분리된 콧물"}
          value={2}
          onChange={onChange}
          cssStyle={{ width: 104 }}
        ></RadioButtonElement>
        <RadioButtonElement
          isSelected={selectedValue === 3}
          text={"선"}
          value={3}
          onChange={onChange}
          cssStyle={{ width: 72 }}
        ></RadioButtonElement>
      </HStack>
      <HStack>
        <RadioButtonElement
          isSelected={selectedValue === 4}
          text={"붉은 점액"}
          value={4}
          onChange={onChange}
          cssStyle={{ width: 104 }}
        ></RadioButtonElement>
        <RadioButtonElement
          isSelected={selectedValue === 5}
          text={"알갱이"}
          value={5}
          onChange={onChange}
          cssStyle={{ width: 104 }}
        ></RadioButtonElement>
        <RadioButtonElement
          isSelected={selectedValue === 6}
          text={"melena"}
          value={6}
          onChange={onChange}
          cssStyle={{ width: 104 }}
        ></RadioButtonElement>
        <RadioButtonElement
          isSelected={selectedValue === 7}
          text={"기타"}
          value={7}
          onChange={onChange}
          cssStyle={{ width: 72 }}
        ></RadioButtonElement>
      </HStack>
      <HStack
        width={280}
        height={56}
        backgroundColor={Colors.BackGround}
        style={{ border: `1px solid ${Colors.Border}` }}
      >
        <textarea
          value={etc}
          onChange={(e) => onChangeEtc(e.target.value)}
          style={{
            width: 280,
            height: 56,
          }}
        />
      </HStack>
    </VStack>
  );
};
