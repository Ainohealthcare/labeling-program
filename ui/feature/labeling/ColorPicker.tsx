'use client'

import styled from '@emotion/styled'

import { HStack, VStack } from '@/ui/components/Stack'
import { TextElement } from '@/ui/components/TextElement'

interface ColorPickerProps {
  color: string
}

export const ColorPicker = (props: ColorPickerProps) => {
    const { color } = props
    return (
        <VStack gap={8}>
            <HStack>
                <TextElement
                    textStyle={'TPropertyTitle'}
                    cssStyle={{ height: 32 }}
                >
          Color
                </TextElement>
            </HStack>
            <ColorRectangle color={color}></ColorRectangle>
        </VStack>
    )
}

const ColorRectangle = styled.div`
  width: 176px;
  height: 32px;
  ${({ color }) => {
        return `background-color: ${color}`
    }}
`
