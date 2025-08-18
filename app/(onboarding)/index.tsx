import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Dimensions } from "react-native";
import { slides } from "@/modules/onboarding/data/option";
import SwipeContent from "@/modules/onboarding/index";

export default function SwipeScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();
  const { height } = Dimensions.get("window");

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      router.push("/(auth)/signup");
    }
  };

  return (
    <SwipeContent
      slides={slides}
      currentIndex={currentIndex}
      setCurrentIndex={setCurrentIndex}
      handleNext={handleNext}
      height={height}
    />
  );
}
