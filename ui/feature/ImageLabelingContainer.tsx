'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { ImageColorPicker } from 'react-image-color-picker'

import { BloodProperty } from './labeling/BloodProperty'
import { ColorPicker } from './labeling/ColorPicker'
import { Memo } from './labeling/Memo'
import { Navigator } from './labeling/Navigator'
import { Status } from './labeling/Status'
import { StoolChecker } from './labeling/StoolChecker'
import { StoolScaleSelector } from './labeling/StoolScaleSelector'
import { Spacer } from '@/ui/components/Spacer'
import { HStack, VStack } from '@/ui/components/Stack'
import icImage256 from '@/ui/example/Image256.png'

interface ImageLabelingProps {
  imageId: string
}

export const ImageLabelingContainer = (props: ImageLabelingProps) => {

    const { imageId } =  props

    const [color, setColor] = useState('#000000')
    const [stoolScale, setStoolScale] = useState(0)
    const [hematochezia, setHematochezia] = useState(false)
    const [proteinLump, setProteinLump] = useState(false)
    const [mucus, setMucus] = useState(false)
    const [bloodProperty, setBloodProperty] = useState(0)
    const [status, setStatus] = useState(0)
    const [etc, setEtc] = useState('')
    const [memo, setMemo] = useState('')

    return (
        <VStack
            alignItems={'center'}
        >
            <VStack
                width={1216}
            >
                <Spacer height={96}></Spacer>
                <HStack
                    paddingHorizontal={104}
                    gap={32}
                >
                    <div style={{ width: 488, height: 488 }}>
                        <ImageColorPicker
                            onColorPick={(color: string) => setColor(color)}
                            imgSrc={icImage256.src}
                            zoom={1}
                        >
                        </ImageColorPicker>
                    </div>
                    <VStack
                        width={176}
                        gap={24}
                    >
                        <ColorPicker
                            color={color}
                        ></ColorPicker>
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
                    </VStack>
                    <VStack>
                        <Spacer height={8}></Spacer>
                        <VStack gap={24}>
                            <div>
                                <BloodProperty
                                    selectedValue={bloodProperty}
                                    onChange={setBloodProperty}
                                    etc={etc}
                                    onChangeEtc={setEtc}
                                ></BloodProperty>
                            </div>
                            <Memo></Memo>
                            <HStack justifyContent={'space-between'}>
                                <Status
                                    selectedValue={status}
                                    onChange={setStatus}
                                ></Status>
                                <Navigator imageId={imageId}></Navigator>
                            </HStack>
                        </VStack>
                    </VStack>
                </HStack>
            </VStack>
        </VStack>
    )
}
