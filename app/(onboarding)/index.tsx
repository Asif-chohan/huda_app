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

// import React, { useState } from "react";
// import { Dimensions, StyleSheet, View } from "react-native";
// import Carousel from "react-native-reanimated-carousel";
// import Button from "../../components/Button";
// import Title from "../../components/Title";

// import { Assets } from "@/assets/images";
// const { width } = Dimensions.get("window");

// const slides = [
//   {
//     id: 1,
//     image: <Assets.Onboarding1 />,
//     title: "Log your\nentertainment history",
//     subtitle:
//       "Keep track of everything you've watched, read, played, or listened to.",
//   },
//   {
//     id: 2,
//     image: <Assets.Onboarding2 />,
//     title: "Discover new favorites",
//     subtitle:
//       "Find your next binge-worthy show, game, book, or podcast with ease.",
//   },
//   {
//     id: 3,
//     image: <Assets.Onboarding3 />,
//     title: "Build your future lists",
//     subtitle:
//       "Easily create and add to your 'to-watch' or 'to-read' lists, and never lose track of what you want to enjoy next.",
//   },
//   {
//     id: 4,
//     image: <Assets.Onboarding4 />,
//     title: "Get rewarded",
//     subtitle:
//       "Celebrate your entertainment milestones with unique achievements as you log your activity.",
//   },
// ];

// const DOT_SIZE = 8;

// export default function SwipeScreen() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     if (currentIndex < slides.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//     } else {
//       // navigation.navigate("SignUp"); // Or your next screen
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Carousel
//         width={width}
//         height={420}
//         data={slides}
//         scrollAnimationDuration={500}
//         onSnapToItem={setCurrentIndex}
//         renderItem={({ item }) => (
//           <View style={styles.slide}>
//             {item.image}
//             <Title mt={12} title={item.title} subtitle={item.subtitle} />
//           </View>
//         )}
//         pagingEnabled
//         loop={false}
//         style={{ flexGrow: 0 }}
//       />

//       {/* Dots */}
//       <View style={styles.dotsContainer}>
//         {slides.map((_, idx) => (
//           <View
//             key={idx}
//             style={[styles.dot, { opacity: currentIndex === idx ? 1 : 0.3 }]}
//           />
//         ))}
//       </View>

//       {/* Button */}
//       <Button
//         title={
//           currentIndex === slides.length - 1 ? "Create an account" : "Next"
//         }
//         onPress={handleNext}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#FAF6F2",
//     // alignItems: "center",
//     // justifyContent: "center",
//     paddingTop: 29,
//   },
//   slide: {
//     // alignItems: "center",
//     // justifyContent: "flex-end",
//     width: width,
//     paddingHorizontal: 20,
//   },
//   image: {
//     // width: 240,
//     // height: 240,
//     marginBottom: 24,
//     flex: 1,
//   },
//   dotsContainer: {
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     marginVertical: 16,
//   },
//   dot: {
//     width: DOT_SIZE,
//     height: DOT_SIZE,
//     borderRadius: DOT_SIZE / 2,
//     backgroundColor: "#222",
//     marginHorizontal: 4,
//   },
//   button: {
//     // width: 180,
//     alignSelf: "center",
//     marginBottom: 32,
//   },
// });

// import { Assets } from "@/assets/images";
// import { useRouter } from "expo-router";
// import React, { useRef, useState } from "react";
// import { StyleSheet, View } from "react-native";
// import { SwiperFlatList } from "react-native-swiper-flatlist";
// import Button from "../../components/Button";
// import Title from "../../components/Title";

// const slides = [
//   {
//     id: 1,
//     image: <Assets.Onboarding1 />,
//     title: "Log your\nentertainment history",
//     subtitle:
//       "Keep track of everything you've watched, read, played, or listened to.",
//   },
//   {
//     id: 2,
//     image: <Assets.Onboarding2 />,
//     title: "Discover new favorites",
//     subtitle:
//       "Find your next binge-worthy show, game, book, or podcast with ease.",
//   },
//   {
//     id: 3,
//     image: <Assets.Onboarding3 />,
//     title: "Build your future lists",
//     subtitle:
//       "Easily create and add to your 'to-watch' or 'to-read' lists, and never lose track of what you want to enjoy next.",
//   },
//   {
//     id: 4,
//     image: <Assets.Onboarding4 />,
//     title: "Get rewarded",
//     subtitle:
//       "Celebrate your entertainment milestones with unique achievements as you log your activity.",
//   },
// ];

// export default function SwipeScreen() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const swiperRef = useRef<SwiperFlatList>(null);
//   const router = useRouter();

//   const handleNext = () => {
//     if (currentIndex < slides.length - 1) {
//       swiperRef?.current?.scrollToIndex({ index: currentIndex + 1 });
//     } else {
//       router.push("/signup");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* Top part: Swiper content */}
//       <View style={styles.swiperWrapper}>
//         <SwiperFlatList
//           ref={swiperRef}
//           index={0}
//           showPagination
//           paginationStyleItemActive={styles.activeDot}
//           paginationStyleItemInactive={styles.inactiveDot}
//           paginationStyle={styles.pagination}
//           data={slides}
//           onChangeIndex={({ index }) => setCurrentIndex(index)}
//           renderItem={({ item }) => (
//             <View style={styles.slide}>
//               {item.image}
//               <Title mt={12} title={item.title} subtitle={item.subtitle} />
//             </View>
//           )}
//         />
//       </View>

//       {/* Bottom part: Button */}
//       <View style={styles.buttonWrapper}>
//         <Button
//           title={
//             currentIndex === slides.length - 1 ? "Create an account" : "Next"
//           }
//           onPress={handleNext}
//           paddingY={15}
//           paddingX={currentIndex === slides.length - 1 ? 32 : 40}
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#FDF4F0",
//     paddingHorizontal: 20,
//     paddingBottom: 32,
//     paddingTop: 29,
//   },
//   swiperWrapper: {
//     flex: 1,
//   },
//   slide: {
//     flex: 1,
//     justifyContent: "center", // vertical center
//     alignItems: "center", // horizontal center
//   },
//   pagination: {
//     marginTop: 30, // spacing below content but inside swiper
//   },
//   activeDot: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: "#000",
//     marginHorizontal: 4,
//   },
//   inactiveDot: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: "#ccc",
//     marginHorizontal: 4,
//   },
//   buttonWrapper: {
//     alignItems: "center",
//     marginTop: 10,
//   },
// });
