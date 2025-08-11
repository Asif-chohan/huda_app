import { useRouter } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import Title from "@/components/Title";
import { Assets } from "@/assets/images";
export default function SignupScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleContinue = () => {
    console.log("Continue to next step");
    router.push("/");
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
          <Title title="Log in" subtitle="We're excited to see you back!" />
        </View>

        {/* Inputs */}
        <View style={styles.inputWrapper}>
          <TextInput label="Email" value={email} onChangeText={setEmail} />
          <View style={styles.inputPassword}>
            <TextInput
              label="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <Text style={styles.helperText}>Forgot password?</Text>
        </View>

        {/* Continue Button */}
        <View style={styles.buttonWrapper}>
          <Button title="Log in" onPress={handleContinue} paddingX={34.5} />
        </View>

        {/* Terms */}
        <Text style={styles.terms}>
          Don’t have an account?
          <Text style={styles.link}>Sign up here</Text>
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
