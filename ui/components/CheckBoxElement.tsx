import styled from '@emotion/styled'

import { HStack } from './Stack'
import { TextElement } from './TextElement'
import { Colors } from '../theme/ColorPalette'

interface Props {
    text: string
    isSelected: boolean
    onChange(isSelected: boolean): void
}
export const CheckBoxElement = ({ text, isSelected, onChange }: Props) => {
    return <HStack
        alignItems={'center'}
        gap={4}
    >
        <CheckBox
            isSelected={isSelected}
            onChange={onChange}
        ></CheckBox>
        <TextElement
            textStyle={'TProperty'}
            color={Colors.TText}
        >{text}</TextElement>
    </HStack>
}

interface CheckBoxProps {
    isSelected: boolean
    onChange(isSelected:boolean): void
}

const CheckBox = ({ isSelected, onChange }: CheckBoxProps) => {
    if (isSelected) {
        return <HStack
            width={16}
            height={16}
            backgroundColor={Colors.Selected}
            onClick={()=>onChange(false)}
        ></HStack>
    } else {
        return <HStack
            width={16}
            height={16}
            backgroundColor={Colors.Unselected}
            onClick={()=>onChange(true)}
        ></HStack>
    }
}
