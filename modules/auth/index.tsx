import { useRouter } from "expo-router";
import {
  KeyboardAvoidingView,
  Pressable,
  TouchableOpacity,
} from "react-native";

import Box from "@/components/Box";
import Text from "@/components/Text";
import Button from "@/components/Button";
import { Assets } from "@/assets/images";

export default function OnBoarding() {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/(auth)/signup/sign-up");
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <Box bgColor="surface" ph={16} pt={50} pb={44} flex={1}>
        {/* Back Icon */}
        <Box height={48} width={48} alignItems="center" justifyContent="center">
          <Pressable onPress={() => router.back()}>
            <Assets.Back height={21} width={21} />
          </Pressable>
        </Box>
        <Box ph={4} pt={32}>
          {/* Title */}
          <Text
            fontFamily="archivoblack"
            font={22}
            color="heading"
            lineHeight={31}
            weight={400}
            align="center"
          >
            Sign up
          </Text>

          {/* Continue Button */}
          <Box mt={40}>
            <Button
              title="Sign up with email"
              onPress={handleContinue}
              paddingX={32}
            />
          </Box>

          {/* OR Separator */}
          <Box flexDirection="row" alignItems="center" mv={12}>
            <Box flex={1} bgColor="strokLight" mr={15} style={{ height: 1 }} />
            <Text
              font={12.5}
              color="textSecondary"
              weight={400}
              lineHeight={24}
            >
              or
            </Text>
            <Box flex={1} bgColor="strokLight" style={{ height: 1 }} ml={15} />
          </Box>

          {/* Apple & Google Icons */}
          <Box flexDirection="row" justifyContent="center" gap={20}>
            <Pressable>
              <Assets.Apple />
            </Pressable>
            <Pressable>
              <Assets.Google />
            </Pressable>
          </Box>
        </Box>

        {/* Terms */}
        <Box mt="auto" ph={4}>
          <TouchableOpacity
            onPress={() => {
              router.push("/(auth)/signup/sign-up");
            }}
          >
            <Text
              font={12}
              lineHeight={24}
              weight={400}
              color="textSecondary"
              align="center"
              fontFamily="regular"
            >
              Already have an account?
              <Text
                font={12}
                fontFamily="bold"
                lineHeight={24}
                weight={700}
                color="primary"
              >
                Log in here
              </Text>
            </Text>
          </TouchableOpacity>
        </Box>
      </Box>
    </KeyboardAvoidingView>
  );
}
