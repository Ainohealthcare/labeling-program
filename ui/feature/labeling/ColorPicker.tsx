'use client'

import styled from '@emotion/styled'

import { ImageElement } from '@/ui/components/ImageElement'
import { HStack, VStack } from '@/ui/components/Stack'
import { TextElement } from '@/ui/components/TextElement'
import icPicker from '@/ui/example/picker.png'

interface ColorPickerProps {
  color: string
  onChange(color: string): void
}

export const ColorPicker = (props: ColorPickerProps) => {
    const { color, onChange } = props
    return <VStack>
        <HStack>
            <TextElement textStyle={'TPropertyTitle'}>Color</TextElement>
            <ImageElement
                src={icPicker.src}
                height={30}
                width={30}
            ></ImageElement>
        </HStack>
        <ColorRectangle color={color}></ColorRectangle>
    </VStack>
}

const ColorRectangle = (props: { color: string }) => {
    <div style={{ width: 174, height: 24, backgroundColor: props.color }}></div>
}
