import { useRouter } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

import GoBack from "@/assets/images/GoBack.svg";
import TextInput from "@/components/TextInput";
import Button from "../../components/Button";
import Title from "../../components/Title";
export default function RestorePasswordScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleContinue = () => {
    console.log("Continue to next step");
    router.push("/(auth)/new-password");
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

        {/* Title & Subtitle */}
        <View style={styles.headerWrapper}>
          <Title
            title="Let’s start with email"
            subtitle="Enter your registered email and we’ll send you a link or code to reset your password. "
          />
        </View>

        <View style={styles.inputWrapper}>
          <TextInput label="Email" value={email} onChangeText={setEmail} />
        </View>

        {/* Continue Button */}
        <View style={styles.buttonWrapper}>
          <Button
            title="Send reset link"
            onPress={handleContinue}
            paddingX={32}

            // disabled={!email || password.length < 8}
          />
        </View>
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
    marginTop: 40,
  },
  inputPassword: {
    marginTop: 12,
  },
  buttonWrapper: {
    marginTop: 40,
  },
  helperText: {
    fontSize: 16,
    color: "#864AE3",
    marginTop: 8,
    fontWeight: "700",
    // alignItems: "center",
    marginLeft: 16,
    // marginBottom: 8,
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
    textDecorationLine: "none",
  },
});
