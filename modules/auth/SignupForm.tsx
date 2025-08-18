import { useRouter } from "expo-router";
import { KeyboardAvoidingView, Pressable, ScrollView } from "react-native";
import { Assets } from "@/assets/images";

import { useUserStore } from "@/store/userStore";
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import Box from "@/components/Box";
import Text from "@/components/Text";

export default function Signup() {
  const router = useRouter();
  const { user, setUser } = useUserStore();

  const handleContinue = () => {
    router.push("/(auth)/signup/personal-info");
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <Box pt={50} ph={16} flex={1} pb={44} bgColor="surface">
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <Box
            height={48}
            width={48}
            alignItems="center"
            justifyContent="center"
          >
            <Pressable onPress={() => router.back()}>
              <Assets.Back height={21} width={21} />
            </Pressable>
          </Box>
          {/* Title & Subtitle */}
          <Box ph={4} mt={28}>
            <Text
              fontFamily="archivoblack"
              font={22}
              color="heading"
              lineHeight={31}
              weight={400}
              align="center"
            >
              Let’s start with email
            </Text>
            <Text
              fontFamily="regular"
              font={13}
              color="subHeading"
              lineHeight={24}
              weight={400}
              align="center"
            >
              We’re excited to have you on board!
            </Text>
          </Box>

          {/* Inputs */}
          <Box mt={40} ph={4}>
            <TextInput
              label="Email"
              value={user.email}
              onChangeText={(text) => setUser({ email: text })}
            />
            <Box mt={12}>
              <TextInput
                label="Password"
                secureTextEntry
                value={user.password}
                onChangeText={(text) => setUser({ password: text })}
                endIcon={<Assets.EyeClosed />}
              />
            </Box>
            <Box mt={8} ml={16}>
              <Text
                font={10}
                weight={400}
                fontFamily="regular"
                color="textSecondary"
                lineHeight={16}
              >
                Must be at least 8 characters long
              </Text>
            </Box>
          </Box>

          {/* Continue Button */}
          <Box mt={40}>
            <Button
              title="Continue"
              onPress={handleContinue}
              // disabled={!email || password.length < 8}
            />
          </Box>

          {/* Terms */}

          <Text
            font={12.5}
            weight={400}
            fontFamily="regular"
            color="textSecondary"
            align="center"
            mt="auto"
            ml={4}
            mr={4}
            lineHeight={20}
          >
            By continuing to use the Huda app, you agree to our{" "}
            <Text
              font={12}
              weight={600}
              fontFamily="semibold"
              color="primary"
              align="center"
              mt="auto"
              lineHeight={20}
            >
              Terms of Service
            </Text>{" "}
            and{" "}
            <Text
              font={12}
              weight={600}
              fontFamily="semibold"
              color="primary"
              align="center"
              mt="auto"
              lineHeight={20}
            >
              Privacy Policy
            </Text>
            , ensuring a smooth and secure experience.
          </Text>
        </ScrollView>
      </Box>
    </KeyboardAvoidingView>
  );
}
