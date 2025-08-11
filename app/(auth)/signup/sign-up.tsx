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

// import GoBack from "@/assets/images/GoBack.svg";
import { Assets } from "@/assets/images";
// import Eye from "@/assets/images/Password.svg";
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import Title from "@/components/Title";
import { useUserStore } from "@/store/userStore";

export default function SignupScreen() {
  const router = useRouter();
  const { user, setUser } = useUserStore();
  const handleContinue = () => {
    console.log("Continue to next step");
    router.push("/(auth)/signup/personal-info");
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
          <Assets.Back />
        </Pressable>

        {/* Title & Subtitle */}
        <View style={styles.headerWrapper}>
          <Title
            title="Let’s start with email"
            subtitle="We’re excited to have you on board!"
          />
        </View>

        {/* Inputs */}
        <View style={styles.inputWrapper}>
          <TextInput
            label="Email"
            value={user.email}
            onChangeText={(text) => setUser({ email: text })}
          />
          <View style={styles.inputPassword}>
            <TextInput
              label="Password"
              secureTextEntry
              value={user.password}
              onChangeText={(text) => setUser({ password: text })}
              endIcon={<Assets.EyeClosed />}
            />
          </View>
          <Text style={styles.helperText}>
            Must be at least 8 characters long
          </Text>
        </View>

        {/* Continue Button */}
        <View style={styles.buttonWrapper}>
          <Button
            title="Continue"
            onPress={handleContinue}
            // disabled={!email || password.length < 8}
          />
        </View>

        {/* Terms */}
        <Text style={styles.terms}>
          By continuing to use the Huda app, you agree to our{" "}
          <Text style={styles.link}>Terms of Service</Text> and{" "}
          <Text style={styles.link}>Privacy Policy</Text>, ensuring a smooth and
          secure experience.
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
    fontFamily: "Inter",
  },
  backIcon: {
    paddingVertical: 12,
  },
  headerWrapper: {
    marginTop: 28,
  },
  inputWrapper: {
    marginTop: 41,
  },
  inputPassword: {
    marginTop: 8,
  },
  buttonWrapper: {
    marginTop: 41,
  },
  helperText: {
    fontSize: 12,
    color: "#1D1D1D",
    marginTop: 8,
    fontWeight: "400",
    // alignItems: "center",
    marginLeft: 16,
    // marginBottom: 8,
  },
  terms: {
    fontSize: 15,
    fontWeight: "400",
    color: "#797470",
    textAlign: "center",
    marginTop: "auto",
    paddingBottom: 12,
    lineHeight: 20,
    letterSpacing: -0.23,
  },
  link: {
    fontSize: 15,
    fontWeight: "600",
    color: "#864AE3",
    textDecorationLine: "none",
    lineHeight: 20,
  },
});
