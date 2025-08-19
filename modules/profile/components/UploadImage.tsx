import { Assets } from "@/assets/images";
import Box from "@/components/Box";
import Button from "@/components/Button";
import Texts from "@/components/Text";
import React from "react";

interface Props {
  onUpload: () => void;
}


export const UploadImage: React.FC<Props> = ({ onUpload }) => {
  return (
    <Box>
      {/* Upload title */}
      <Texts
        font={15.5}
        lineHeight={24}
        fontFamily="archivoblack"
        weight={400}
        color="heading"
        mb={12}
      >
        Upload image{" "}
        <Texts
          font={12.5}
          fontFamily="regular"
          self="center"
          weight={400}
          lineHeight={26}
          mb={12}
        >
          (optional)
        </Texts>
      </Texts>

      {/* Upload button */}
      <Box self="flex-start">
        <Button
          title="Upload"
    onPress={onUpload}
          paddingX={16}
          paddingY={9}
          leftIcon={<Assets.Upload width={20} height={20} />}
        />
      </Box>
    </Box>
  );
};
