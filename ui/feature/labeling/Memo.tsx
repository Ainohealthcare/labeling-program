import { HStack, VStack } from '@/ui/components/Stack'
import { TextElement } from '@/ui/components/TextElement'
import { Colors } from '@/ui/theme/ColorPalette'

export const Memo = () => {
    return <VStack gap={8}>
        <TextElement
            textStyle={'TPropertyTitle'}
            cssStyle={{ textAlign: 'start', height: 24 }}
        >Memo</TextElement>
        <HStack
            width={280}
            height={96}
            backgroundColor={Colors.BackGround}
            style={{ border: `1px solid ${Colors.Border}` }}
        >
            <HStack
                paddingHorizontal={16}
                paddingVertical={8}
            >
                <TextElement textStyle={'TNormal'}>
                    placeholder
                </TextElement>
            </HStack>
        </HStack>
    </VStack>
}
