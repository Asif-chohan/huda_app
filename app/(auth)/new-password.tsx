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

import GoBack from "@/assets/images/GoBack.svg";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import Title from "../../components/Title";
export default function SignupScreen() {
  const [newPassword, setNewPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");

  const router = useRouter();

  const handleContinue = () => {
    console.log("Continue to next step");
    router.push("/(auth)/onboarding");
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
          <Title title="Enter new password" />
        </View>

        {/* Inputs */}
        <View style={styles.inputWrapper}>
          <TextInput
            label="New password"
            secureTextEntry
            value={newPassword}
            onChangeText={setNewPassword}
          />
          <Text style={styles.helperText}>
            Must be at least 8 characters long
          </Text>
          <View style={styles.inputPassword}>
            <TextInput
              label="Current password"
              secureTextEntry
              value={currentPassword}
              onChangeText={setCurrentPassword}
            />
          </View>
          <Text style={styles.helperText}>Password matched</Text>
        </View>

        {/* Continue Button */}
        <View style={styles.buttonWrapper}>
          <Button
            title="Save Password"
            onPress={handleContinue}
            paddingX={34.5}
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
    fontSize: 12,
    color: "#1D1D1D",
    marginTop: 8,
    fontWeight: "400",
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
