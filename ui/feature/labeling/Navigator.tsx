import { useRouter } from "next/navigation";
import { useState } from "react";

import { HStack, VStack } from "@/ui/components/Stack";
import { TextElement } from "@/ui/components/TextElement";
import { Colors } from "@/ui/theme/ColorPalette";

interface NavigatorProps {
  imageId: string;
  onSave: () => void;
}

export const Navigator = ({ imageId, onSave }: NavigatorProps) => {
  const router = useRouter();
  const id = parseInt(imageId, 10);
  const prevId = id > 1 ? id - 1 : 1;
  const nextId = id + 1;

  const [newId, setNewId] = useState(imageId);

  const prevClick = async () => {
    await onSave();
    router.push(`/images/${prevId}`);
  };

  const nextClick = async () => {
    await onSave();
    router.push(`/images/${nextId}`);
  };

  const jumpClick = async () => {
    await onSave();
    router.push(`/images/${newId}`);
  };

  {
    return (
      <VStack
        paddingHorizontal={20}
        paddingVertical={20}
        style={{ border: "2px solid black", marginTop: 20 }}
      >
        <HStack>
          <input
            value={newId}
            onChange={(e) => setNewId(e.target.value)}
            style={{
              height: "30px",
            }}
          />
          <button onClick={jumpClick} style={{ height: "30px" }}>
            GO
          </button>
        </HStack>
        <HStack gap={20} paddingVertical={20}>
          <div onClick={prevClick}>
            <TextElement
              textStyle={"TGoto"}
              color={Colors.TSubText}
              cssStyle={{ height: 24 }}
            >
              PREV
            </TextElement>
          </div>
          <div onClick={nextClick}>
            <TextElement
              textStyle={"TGoto"}
              color={Colors.TSubText}
              cssStyle={{ height: 24 }}
            >
              NEXT
            </TextElement>
          </div>
        </HStack>
      </VStack>
    );
  }
};
