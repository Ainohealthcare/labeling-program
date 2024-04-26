import { RadioButtonElement } from '@/ui/components/RadioButtonElement'
import { VStack } from '@/ui/components/Stack'
import { TextElement } from '@/ui/components/TextElement'

interface StatusProps {
  selectedValue: number
  onChange(value: number): void
}

const StatusList = [
    { label: 'unlabeled', value: 0 },
    { label: 'labeled', value: 1 },
    { label: 'inappropriate', value: 2 },
    { label: 'skip', value: 3 },
]

export const Status = ({ selectedValue, onChange }: StatusProps) => {
    return <VStack gap={8}>
        <TextElement
            textStyle={'TPropertyTitle'}
            cssStyle={{ textAlign: 'start', height: 24 }}
        >Status</TextElement>
        {StatusList.map(({ label, value }) => (
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
}
