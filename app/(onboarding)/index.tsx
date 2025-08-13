import { Assets } from "@/assets/images";
import { useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import Button from "../../components/Button";
import Title from "../../components/Title";
const { width } = Dimensions.get("window");

const slides = [
  {
    id: 1,
    image: <Assets.Onboarding1 />,
    title: "Log your\nentertainment history",
    subtitle:
      "Keep track of everything you've watched,\n read, played, or listened to.",
  },
  {
    id: 2,
    image: <Assets.Onboarding2 />,
    title: "Discover new favorites",
    subtitle:
      "Find your next binge-worthy show, game,\n book, or podcast with ease.",
  },
  {
    id: 3,
    image: <Assets.Onboarding3 />,
    title: "Build your future lists",
    subtitle:
      "Easily create and add to your 'to-watch' or\n 'to-read' lists, and never lose track of what\n you want to enjoy next.",
  },
  {
    id: 4,
    image: <Assets.Onboarding4 />,
    title: "Get rewarded",
    subtitle:
      "Celebrate your entertainment milestones with\n unique achievements as you log your activity.",
  },
];

export default function SwipeScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef<SwiperFlatList>(null);
  const router = useRouter();

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      swiperRef?.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      router.push("/(tabs)");
    }
  };

  return (
    <View style={styles.container}>
      <SwiperFlatList
        ref={swiperRef}
        index={0}
        showPagination
        paginationStyleItemActive={styles.activeDot}
        paginationStyleItemInactive={styles.inactiveDot}
        paginationStyle={styles.pagination}
        data={slides}
        onChangeIndex={({ index }) => setCurrentIndex(index)}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <View style={{ paddingTop: 29, marginBottom: 48 }}>
              {item.image}
            </View>
            <Title mt={12} title={item.title} subtitle={item.subtitle} />
          </View>
        )}
      />
      <View style={styles.buttonWrapper}>
        <Button
          title={
            currentIndex === slides.length - 1 ? "Create an account" : "Next"
          }
          onPress={handleNext}
          paddingX={currentIndex === slides.length - 1 ? 32 : 40}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDF4F0",
    // paddingBottom: 32,
  },
  slide: {
    width,
    alignItems: "center",
    paddingTop: 30,
    // paddingHorizontal: 20,
  },
  imageWrapper: {
    marginBottom: 48,
  },
  titleWrapper: {
    marginBottom: 56,
  },
  pagination: {
    position: "absolute",
    bottom: 110, // 40px above button
  },
  activeDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#000",
    marginHorizontal: 4,
  },
  inactiveDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
    marginHorizontal: 4,
  },
  buttonWrapper: {
    // position: "absolute",
    // bottom: 30,
    width: "100%",
    alignItems: "center",
    paddingBottom: 32,
  },
});




