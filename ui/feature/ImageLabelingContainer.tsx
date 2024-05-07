"use client";

import { useEffect, useState } from "react";
import { ImageColorPicker } from "react-image-color-picker";

import { BloodProperty } from "./labeling/BloodProperty";
import { ColorPicker } from "./labeling/ColorPicker";
import { Memo } from "./labeling/Memo";
import { Navigator } from "./labeling/Navigator";
import { Status } from "./labeling/Status";
import { StoolChecker } from "./labeling/StoolChecker";
import { StoolScaleSelector } from "./labeling/StoolScaleSelector";
import { supabase } from "./supabase";
import { useLabelData } from "./useLabelData";
import { userStore } from "../utility/userStore";
import { Spacer } from "@/ui/components/Spacer";
import { HStack, VStack } from "@/ui/components/Stack";

interface ImageLabelingProps {
  imageId: string;
}

export const ImageLabelingContainer = (props: ImageLabelingProps) => {
  const { data } = useLabelData({ imageId: props.imageId });

  const { user } = userStore();

  const { imageId } = props;
  const [image, setImage] = useState("");
  const [color, setColor] = useState("#000000");
  const [stoolScale, setStoolScale] = useState(0);
  const [hematochezia, setHematochezia] = useState(false);
  const [proteinLump, setProteinLump] = useState(false);
  const [mucus, setMucus] = useState(false);
  const [bloodProperty, setBloodProperty] = useState(0);
  const [status, setStatus] = useState(0);
  const [etc, setEtc] = useState("");
  const [memo, setMemo] = useState("");
  const [proteinLumpHigh, setProteinLumpHigh] = useState(false);
  const [mucusHigh, setMucusHigh] = useState(false);

  useEffect(() => {
    if (data) {
      const {
        id,
        color,
        bloodEtc,
        memo,
        image,
        status,
        stoolScale,
        hematochezia,
        proteinLump,
        mucus,
        bloodProperty,
        proteinLumpHigh,
        mucusHigh,
      } = data[0];
      setImage(image);
      setColor(color ?? "#000000");
      setStoolScale(stoolScale ?? 0);
      setHematochezia(hematochezia ?? false);
      setProteinLump(proteinLump ?? false);
      setMucus(mucus ?? false);
      setBloodProperty(bloodProperty ?? 0);
      setStatus(status ?? 1);
      setEtc(bloodEtc ?? "");
      setMemo(memo ?? "");
      setProteinLumpHigh(proteinLumpHigh ?? false);
      setMucusHigh(mucusHigh ?? 0);
    }
  }, [data]);

  const onClick = () => {
    (async () => {
      const { data, error } = await supabase
        .from("labeled_image")
        .upsert({
          id: imageId,
          color: color,
          bloodEtc: etc,
          memo: memo,
          status: status,
          stoolScale: stoolScale,
          hematochezia: hematochezia,
          proteinLump: proteinLump,
          mucus: mucus,
          bloodProperty: bloodProperty,
          proteinLumpHigh: proteinLumpHigh,
          mucusHigh: mucusHigh,
        })
        .select();

      console.log(data);
    })();
  };

  if (
    user === null ||
    user.id !== "admin" ||
    user.password !== "TKv9EF4iEhZ5xgg"
  ) {
    return <div>로그인이 필요합니다.</div>;
  }

  return (
    <VStack alignItems={"center"}>
      <VStack>
        <Spacer height={96}></Spacer>
        <HStack paddingHorizontal={104} gap={32}>
          <div style={{ width: 720, height: 720, objectFit: "contain" }}>
            <ImageColorPicker
              onColorPick={(color: string) => setColor(color)}
              imgSrc={image}
              zoom={1}
            ></ImageColorPicker>
          </div>
          <VStack width={176} gap={24}>
            <ColorPicker color={color}></ColorPicker>
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
              proteinLumpHigh={proteinLumpHigh}
              setProteinLumpHigh={setProteinLumpHigh}
              mucusHigh={mucusHigh}
              setMucusHigh={setMucusHigh}
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
              <Memo memo={memo} setMemo={setMemo}></Memo>
              <HStack justifyContent={"space-between"}>
                <Status selectedValue={status} onChange={setStatus}></Status>
              </HStack>
            </VStack>
            <Navigator imageId={imageId} onSave={onClick}></Navigator>
            <button onClick={onClick}>저장</button>
          </VStack>
        </HStack>
      </VStack>
    </VStack>
  );
};
