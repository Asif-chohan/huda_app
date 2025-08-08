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

import PassionCard from "@/components/PassionCard";
import Button from "../../components/Button";
import Title from "../../components/Title";

const passionsData = [
  {
    id: 1,
    icon: "book-outline",
    label: "Books & literature",
    color: "#EDD358",
  },
  { id: 2, icon: "film-outline", label: "Movies & TV Shows", color: "#78C4E0" },
  {
    id: 3,
    icon: "headset-outline",
    label: "Podcasts & Audio",
    color: "#ECA9F2",
  },
  {
    id: 4,
    icon: "game-controller-outline",
    label: "Games & Esports",
    color: "#8ACC8B",
  },
  {
    id: 5,
    icon: "musical-notes-outline",
    label: "Music & Playlists",
    color: "#ECA9F2",
  },
  {
    id: 6,
    icon: "color-palette-outline",
    label: "Comics & Graphic Novels",
    color: "#EDD358",
  },
];

export default function PickPassionScreen() {
  const router = useRouter();

  const handleContinue = () => {
    console.log("Continue to next step");
    router.push("/(auth)/personal-info");
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
                icon={item.icon as keyof typeof Ionicons.glyphMap}
                label={item.label}
                color={item.color}
                onPress={() => console.log(`Selected: ${item.label}`)}
              />
            ))}
          </View>
        </ScrollView>

        {/* Continue Button at bottom */}
        <View style={styles.buttonWrapper}>
          <Button title="Let’s start" onPress={handleContinue} />
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
    paddingBottom: 100, // space for button
  },
  backIcon: {
    paddingVertical: 10,
  },
  headerWrapper: {
    marginTop: 28,
    marginBottom: 32,
  },
  cardsWrapper: {
    flexDirection: "column",
  },
  buttonWrapper: {
    paddingHorizontal: 20,
    paddingBottom: 32,
    backgroundColor: "#FDF4F0",
  },
});
