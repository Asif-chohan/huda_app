import Box from "@/components/Box";
import Texts from "@/components/Text";
import React from "react";
import * as Progress from "react-native-progress";

interface ProgressItemProps {
  label: string;
  current: number;
  total: number;
  unit: string;
  fillColor: string;
  bgColor: string;
}

const ProgressItem: React.FC<ProgressItemProps> = ({
  label,
  current,
  total,
  unit,
  fillColor,
  bgColor,
}) => {
  const progress = current / total;

  return (
    <Box >
      {/* Top row */}
      <Box flexDirection="row" justifyContent="space-between" alignItems="center">
        <Texts font={10} fontFamily="medium" lineHeight={18.5} color="subHeading">
          Next unlock:{" "}
          <Texts font={10} fontFamily="medium" lineHeight={18.5} color="heading">
            {label}
          </Texts>
        </Texts>

        <Texts font={10} fontFamily="medium" lineHeight={18.5} color="textSecondary">
    <Texts color="heading" font={10} fontFamily="medium" lineHeight={18.5} >{current}/</Texts>     
          
          
          {total} {unit} left
        </Texts>
      </Box>

      {/* Progress bar */}
      <Progress.Bar
        progress={progress}
        width={null} // full width
        height={8}
        color={fillColor}
        unfilledColor={bgColor}
        borderWidth={0}
        borderRadius={40}
        style={{ marginTop: 8}}
      />
    </Box>
  );
};

export default ProgressItem;
