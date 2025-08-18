import React from "react";
import Box from "@/components/Box";
import Text from "@/components/Text";
import Button from "@/components/Button";
import { SwipeContentProps } from "@/types/onBoarding";

export default function SwipeContent({
  slides,
  currentIndex,
  handleNext,
  height,
}: SwipeContentProps) {
  const currentSlide = slides[currentIndex];

  return (
    <Box flex={1} bgColor="surface">
      {/* Image & Title */}
      <Box alignItems="center" ph={20} pt={44}>
        <Box pt={29} mb={48}>
          <currentSlide.image width={"100%"} height={365} />
        </Box>

        <Text
          fontFamily="archivoblack"
          font={22}
          color="heading"
          lineHeight={31}
          weight={400}
          align="center"
        >
          {currentSlide.title}
        </Text>

        <Text
          fontFamily="regular"
          font={13}
          color="subHeading"
          lineHeight={24}
          weight={400}
          align="center"
        >
          {currentSlide.subtitle}
        </Text>
      </Box>

      {/* Pagination Dots */}
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        mt={height * 0.07}
      >
        {slides.map((_, i) => (
          <Box
            key={i}
            width={8}
            height={8}
            radius={4}
            mr={6}
            bgColor={i === currentIndex ? "heading" : "strokGray"}
          />
        ))}
      </Box>

      {/* Next Button */}
      <Box alignItems="center" width="100%" pb={44} mt={height * 0.05}>
        <Button
          title={
            currentIndex === slides.length - 1 ? "Create an account" : "Next"
          }
          onPress={handleNext}
          paddingX={currentIndex === slides.length - 1 ? 32 : 40}
        />
      </Box>
    </Box>
  );
}
