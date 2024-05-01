import { CheckBoxElement } from '@/ui/components/CheckBoxElement'
import { VStack } from '@/ui/components/Stack'
import { TextElement } from '@/ui/components/TextElement'
import { Colors } from '@/ui/theme/ColorPalette'

interface StoolCheckerProps {
  hematochezia: boolean
  setHematochezia(hematochezia: boolean): void
  proteinLump: boolean
  setProteinLump(proteinLump: boolean): void
  mucus: boolean
  setMucus(mucus: boolean): void
}

export const StoolChecker = (props: StoolCheckerProps) => {
    const {
        hematochezia,
        setHematochezia,
        proteinLump,
        setProteinLump,
        mucus,
        setMucus,
    } = props
    return (
        <VStack
            width={174}
            gap={8}
            justifyContent={'start'}
        >
            <TextElement
                textStyle={'TPropertyTitle'}
                color={Colors.THead}
                cssStyle={{ textAlign: 'left' }}
            >
        Stool Properties
            </TextElement>
            <CheckBoxElement
                text={'Hematochezia'}
                isSelected={hematochezia}
                onChange={setHematochezia}
            ></CheckBoxElement>
            <CheckBoxElement
                text={'Protein Lump'}
                isSelected={proteinLump}
                onChange={setProteinLump}
            ></CheckBoxElement>
            <CheckBoxElement
                text={'Mucus'}
                isSelected={mucus}
                onChange={setMucus}
            ></CheckBoxElement>
        </VStack>
    )
}
