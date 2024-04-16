import { RadioButtonElement } from '@/ui/components/RadioButtonElement'
import { VStack } from '@/ui/components/Stack'
import { TextElement } from '@/ui/components/TextElement'

interface StoolScaleSelectorProps {
  value: string
  onChange(value: string): void
}

export const StoolScaleSelector = ({ value, onChange }: StoolScaleSelectorProps) => {
    return <VStack
        width={174}
        gap={8}
    >
        <TextElement
            textStyle={'TPropertyTitle'}
            cssStyle={{ textAlign: 'start' }}
        >Stool Scale</TextElement>
        <RadioButtonElement
            isSelected={true}
            value={'very hard'}
        ></RadioButtonElement>
        <RadioButtonElement
            isSelected={true}
            value={'hard'}
        ></RadioButtonElement>
        <RadioButtonElement
            isSelected={true}
            value={'a little hard'}
        ></RadioButtonElement>
        <RadioButtonElement
            isSelected={true}
            value={'formed'}
        ></RadioButtonElement>
        <RadioButtonElement
            isSelected={true}
            value={'loose'}
        ></RadioButtonElement>
        <RadioButtonElement
            isSelected={true}
            value={'very loose'}
        ></RadioButtonElement>
        <RadioButtonElement
            isSelected={true}
            value={'watery'}
        ></RadioButtonElement>
    </VStack>
}
