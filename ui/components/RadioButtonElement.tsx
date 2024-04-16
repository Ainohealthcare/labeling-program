import styled from '@emotion/styled'

import { HStack } from '@/ui/components/Stack'
import { TextElement } from '@/ui/components/TextElement'
import { Colors } from '@/ui/theme/ColorPalette'

interface Props {
    isSelected: boolean
    onChange(value: number): void
    text: string
    value: number
}

export const RadioButtonElement = ({ isSelected, onChange, text, value }: Props) => {
    return <HStack
        gap={4}
        alignItems={'center'}
    >
        <SelectButton
            isSelected={isSelected}
            value={value}
            onChange={onChange}
        ></SelectButton>
        <TextElement
            textStyle={'TProperty'}
            color={Colors.TText}
        >{text}</TextElement>
    </HStack>
}

interface SelectButtonProps {
    isSelected: boolean
    value: number
    onChange(value: number): void
}

const SelectButton = ({ isSelected, value, onChange }: SelectButtonProps) => {
    if (isSelected) {
        return <HStack
            width={16}
            height={16}
            backgroundColor={Colors.Selected}
            onClick={() => onChange(value)}
        ></HStack>
    } else {
        return <HStack
            width={16}
            height={16}
            backgroundColor={Colors.Unselected}
            onClick={() => onChange(value)}
        ></HStack>
    }
}
