'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { ColorPicker } from './labeling/ColorPicker'
import { StoolScaleSelector } from './labeling/StoolScaleSelector'
import { ImageElement } from '../components/ImageElement'
import { Spacer } from '@/ui/components/Spacer'
import { HStack, VStack } from '@/ui/components/Stack'
import icImage256 from '@/ui/example/Image256.png'

interface ImageLabelingProps {
  imageId: string
}

export const ImageLabelingContainer = (props: ImageLabelingProps) => {

    const router = useRouter()
    const imageId = { props }
    const [color, setColor] = useState('#000000')
    const [stoolScale, setStoolScale] = useState('')

    return (
        <VStack paddingHorizontal={363}>
            <Spacer height={120}></Spacer>
            <HStack>
                <ImageElement
                    src={icImage256.src}
                    width={784}
                    height={784}
                ></ImageElement>
                <VStack>
                    <ColorPicker
                        color={color}
                        onChange={setColor}
                    ></ColorPicker>
                    <VStack>
                        <StoolScaleSelector
                            value={stoolScale}
                            onChange={setStoolScale}
                        ></StoolScaleSelector>
                        <HStack>
                        </HStack>
                    </VStack>
                </VStack>
            </HStack>
        </VStack>
    )
}
