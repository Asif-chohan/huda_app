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

// import Book from "@/assets/images/Book.svg"; // Example SVG import
import { Assets } from "@/assets/images";
import Button from "@/components/Button";
import PassionCard from "@/components/PassionCard";
import Title from "@/components/Title";
// import Comics from "@/assets/images/Comics.svg";
// import Game from "@/assets/images/Game.svg";
// import Movie from "@/assets/images/Movie.svg"; // Example SVG import
// import Podcast from "@/assets/images/Playlist.svg";
// import Music from "@/assets/images/Sound.svg";
import { useUserStore } from "@/store/userStore";

const passionsData = [
  {
    id: 1,
    icon: <Assets.Book />,
    label: "Books & literature",
    color: "#EDD358",
  },
  {
    id: 2,
    icon: <Assets.Claspperboard />,
    label: "Movies & TV Shows",
    color: "#78C4E0",
  },
  {
    id: 3,
    icon: <Assets.Podcast />,
    label: "Podcasts & Audio",
    color: "#ECA9F2",
  },
  {
    id: 4,
    icon: <Assets.GamePad />,
    label: "Games & Esports",
    color: "#8ACC8B",
  },
  {
    id: 5,
    icon: <Assets.Music />,
    label: "Music & Playlists",
    color: "#ECA9F2",
  },
  {
    id: 6,
    icon: <Assets.Notebook />,
    label: "Comics & Graphic Novels",
    color: "#EDD358",
  },
];

export default function PickPassionScreen() {
  const router = useRouter();
  const { user, setUser } = useUserStore();
  const togglePassion = (label: string) => {
    const currentPassions = user.passions || [];
    if (currentPassions.includes(label)) {
      setUser({ passions: currentPassions.filter((p) => p !== label) });
    } else {
      setUser({ passions: [...currentPassions, label] });
    }
  };
  const handleContinue = () => {
    console.log("Selected passions:", user.passions);
    console.log("the user", user);
    router.push("/(tabs)");
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
            {passionsData.map((item) => {
              const isSelected = user.passions.includes(item.label);
              return (
                <PassionCard
                  key={item.id}
                  icon={item.icon}
                  label={item.label}
                  color={item.color}
                  selected={isSelected} // you can style differently if selected
                  onPress={() => togglePassion(item.label)}
                />
              );
            })}
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
