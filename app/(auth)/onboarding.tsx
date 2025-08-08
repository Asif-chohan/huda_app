import { useRouter } from "expo-router";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import AppleLogin from "@/assets/images/AppleLogin.svg";
import GoBack from "@/assets/images/GoBack.svg";
import GoogleLogin from "@/assets/images/GoogleLogin.svg";
import Button from "../../components/Button";
import Title from "../../components/Title";
export default function OnBoardingScreen() {
  const router = useRouter();

  const handleContinue = () => {
    console.log("Continue to next step");
    router.push("/(auth)/swipe-screen");
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        {/* Back Icon */}
        <Pressable style={styles.backIcon} onPress={() => router.back()}>
          <GoBack width={24} height={24} />
        </Pressable>

        {/* Title */}
        <View style={styles.headerWrapper}>
          <Title title="Sign up" />
        </View>

        {/* Continue Button */}
        <View style={styles.buttonWrapper}>
          <Button
            title="Sign up with email"
            onPress={handleContinue}
            paddingX={32}
          />
        </View>

        {/* OR Separator */}
        <View style={styles.orContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>or</Text>
          <View style={styles.line} />
        </View>

        {/* Apple & Google Icons */}
        <View style={styles.iconContainer}>
          <Pressable style={styles.iconWrapper}>
            <AppleLogin />
          </Pressable>
          <Pressable style={styles.iconWrapper}>
            <GoogleLogin />
          </Pressable>
        </View>

        {/* Terms */}
        <Text style={styles.terms}>
          Already have an account?
          <Text style={styles.link}> Log in here</Text>
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FDF4F0",
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 32,
  },
  backIcon: {
    paddingVertical: 12,
  },
  headerWrapper: {
    marginTop: 28,
  },
  buttonWrapper: {
    marginTop: 40,
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#F0EAE6",
  },
  orText: {
    marginHorizontal: 15,
    fontSize: 16,
    color: "#797470",
    fontWeight: "400",
    lineHeight: 24,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
  iconWrapper: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },

  terms: {
    fontSize: 16,
    fontWeight: "400",
    color: "#797470",
    textAlign: "center",
    marginTop: "auto",
    paddingBottom: 12,
  },
  link: {
    fontSize: 16,
    fontWeight: "700",
    color: "#864AE3",
  },
});
