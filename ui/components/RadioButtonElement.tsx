import styled from '@emotion/styled'

import { HStack } from '@/ui/components/Stack'
import { TextElement } from '@/ui/components/TextElement'
import { Colors } from '@/ui/theme/ColorPalette'

interface Props {
  isSelected: boolean
  value: string
}

export const RadioButtonElement = ({ isSelected, value }: Props) => {
    return <HStack
        gap={4}
        alignItems={'center'}
    >
        <UnSelectedCircle></UnSelectedCircle>
        <TextElement
            textStyle={'TProperty'}
            color={Colors.TText}
        >{value}</TextElement>
    </HStack>
}

const UnSelectedCircle = styled.div(
    {
        width: 16,
        height: 16,
        borderRadius: 8,
        backgroundColor: Colors.Unselected,
    },
)
