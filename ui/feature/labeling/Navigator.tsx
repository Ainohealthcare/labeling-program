import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { Spacer } from '@/ui/components/Spacer'
import { HStack, VStack } from '@/ui/components/Stack'
import { TextElement } from '@/ui/components/TextElement'
import { Colors } from '@/ui/theme/ColorPalette'

interface NavigatorProps {
  imageId: string
}

export const Navigator = ({ imageId }: NavigatorProps) => {
    const router = useRouter()
    const id = parseInt(imageId, 10)
    const prevId = id > 1 ? id - 1 : 1
    const nextId = id + 1

    const [newId, setNewId] = useState(imageId)

    {
        return (
            <VStack
                paddingHorizontal={20}
                paddingVertical={20}
                style={{ border: '2px solid black', marginTop: 20 }}
            >
                <HStack>
                    <input
                        value={newId}
                        onChange={(e) => setNewId(e.target.value)}
                        style={{
                            height: '30px',
                        }}
                    />
                    <button
                        onClick={() => router.push(`/images/${newId}`)}
                        style={{ height: '30px' }}
                    >
            GO
                    </button>
                </HStack>
                <HStack
                    gap={20}
                    paddingVertical={20}
                >
                    <div onClick={() => router.push(`/images/${prevId}`)}>
                        <TextElement
                            textStyle={'TGoto'}
                            color={Colors.TSubText}
                            cssStyle={{ height: 24 }}
                        >
              PREV
                        </TextElement>
                    </div>
                    <div onClick={() => router.push(`/images/${nextId}`)}>
                        <TextElement
                            textStyle={'TGoto'}
                            color={Colors.TSubText}
                            cssStyle={{ height: 24 }}
                        >
              NEXT
                        </TextElement>
                    </div>
                </HStack>
            </VStack>
        )
    }
}
