import { HStack, VStack } from '@/ui/components/Stack'
import { TextElement } from '@/ui/components/TextElement'
import { Colors } from '@/ui/theme/ColorPalette'

interface Props {
  memo: string
  setMemo(memo: string): void
}

export const Memo = ({ memo, setMemo }: Props) => {
    return (
        <VStack gap={8}>
            <TextElement
                textStyle={'TPropertyTitle'}
                cssStyle={{ textAlign: 'start', height: 24 }}
            >
        Memo
            </TextElement>
            <HStack
                width={280}
                height={96}
                backgroundColor={Colors.BackGround}
                style={{ border: `1px solid ${Colors.Border}` }}
            >
                <textarea
                    value={memo}
                    onChange={(e) => setMemo(e.target.value)}
                    style={{
                        width: 280,
                        height: 96,
                    }}
                />
            </HStack>
        </VStack>
    )
}
