'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { BloodProperty } from './labeling/BloodProperty'
import { ColorPicker } from './labeling/ColorPicker'
import { StoolChecker } from './labeling/StoolChecker'
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
    const [stoolScale, setStoolScale] = useState(0)
    const [hematochezia, setHematochezia] = useState(false)
    const [proteinLump, setProteinLump] = useState(false)
    const [mucus, setMucus] = useState(false)

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
                    <HStack>
                        <StoolScaleSelector
                            selectedValue={stoolScale}
                            onChange={setStoolScale}
                        ></StoolScaleSelector>
                        <StoolChecker
                            hematochezia={hematochezia}
                            setHematochezia={setHematochezia}
                            proteinLump={proteinLump}
                            setProteinLump={setProteinLump}
                            mucus={mucus}
                            setMucus={setMucus}
                        ></StoolChecker>
                    </HStack>
                    <BloodProperty></BloodProperty>
                </VStack>
            </HStack>
        </VStack>
    )
}
