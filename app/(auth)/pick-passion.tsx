import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

import Book from "@/assets/images/Book.svg"; // Example SVG import
import PassionCard from "@/components/PassionCard";
import Button from "../../components/Button";
import Title from "../../components/Title";

import Comics from "@/assets/images/Comics.svg";
import Game from "@/assets/images/Game.svg";
import Movie from "@/assets/images/Movie.svg"; // Example SVG import
import Podcast from "@/assets/images/Playlist.svg";
import Music from "@/assets/images/Sound.svg";

const passionsData = [
  {
    id: 1,
    icon: <Book width={13.33} height={16.67} />,
    label: "Books & literature",
    color: "#EDD358",
  },
  {
    id: 2,
    icon: <Movie width={13.33} height={16.67} />,
    label: "Movies & TV Shows",
    color: "#78C4E0",
  },
  {
    id: 3,
    icon: <Music width={13.33} height={16.67} />,
    label: "Podcasts & Audio",
    color: "#ECA9F2",
  },
  {
    id: 4,
    icon: <Game width={13.33} height={16.67} />,
    label: "Games & Esports",
    color: "#8ACC8B",
  },
  {
    id: 5,
    icon: <Podcast width={13.33} height={16.67} />,
    label: "Music & Playlists",
    color: "#ECA9F2",
  },
  {
    id: 6,
    icon: <Comics width={13.33} height={16.67} />,
    label: "Comics & Graphic Novels",
    color: "#EDD358",
  },
];

export default function PickPassionScreen() {
  const router = useRouter();

  const handleContinue = () => {
    console.log("Continue to next step");
    router.push("/(auth)/login");
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Back Icon */}
          <Pressable style={styles.backIcon} onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={28} color="#1D1D1D" />
          </Pressable>

          {/* Title & Subtitle */}
          <View style={styles.headerWrapper}>
            <Title
              title="Pick your passions!"
              subtitle="Choose what excites you, and we’ll tailor your experience!"
            />
          </View>

          {/* Passion Cards */}
          <View style={styles.cardsWrapper}>
            {passionsData.map((item) => (
              <PassionCard
                key={item.id}
                icon={item.icon}
                label={item.label}
                color={item.color}
                onPress={() => console.log(`Selected: ${item.label}`)}
              />
            ))}
          </View>
        </ScrollView>

        {/* Continue Button at bottom */}
        <View style={styles.buttonWrapper}>
          <Button paddingX={19} title="Let’s start" onPress={handleContinue} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDF4F0",
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 50,
    // space for button
  },
  backIcon: {
    paddingVertical: 10,
  },
  headerWrapper: {
    marginTop: 28,
    marginBottom: 40,
  },
  cardsWrapper: {
    flexDirection: "column",
    paddingHorizontal: 28,
  },
  buttonWrapper: {
    paddingHorizontal: 20,
    paddingBottom: 32,
    backgroundColor: "#FDF4F0",
  },
});
