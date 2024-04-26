import { useRouter } from 'next/navigation'

import { Spacer } from '@/ui/components/Spacer'
import { VStack } from '@/ui/components/Stack'
import { TextElement } from '@/ui/components/TextElement'
import { Colors } from '@/ui/theme/ColorPalette'

interface NavigatorProps {
  imageId: string
}

export const Navigator = ({ imageId }: NavigatorProps) => {
    const router = useRouter()
    const id = parseInt(imageId, 10)
    const nextId = id + 1

    {return <VStack
        width={72}
        height={152}
    >
        <Spacer height={64}></Spacer>
        <div
            onClick={() => router.push('/')}
        >
            <TextElement
                textStyle={'TGoto'}
                color={Colors.TSubText}
                cssStyle={{ height: 24 }}
            >HOME</TextElement>
        </div>
        <Spacer height={40}></Spacer>
        <div
            onClick={() => router.push(`/images/${nextId}`)}
        >
            <TextElement
                textStyle={'TGoto'}
                color={Colors.TSubText}
                cssStyle={{ height: 24 }}
            >NEXT</TextElement>
        </div>
    </VStack>}
}
