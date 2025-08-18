import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";

import { Assets } from "@/assets/images";
import Button from "@/components/Button";
import PassionCard from "@/modules/auth/components/PassionCard";
import Box from "@/components/Box";
import Text from "@/components/Text";
import { useUserStore } from "@/store/userStore";
import { passionsData } from "@/modules/auth/data/option";

export default function PickPassionComponent() {
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
      <Box pt={50} pb={44} ph={16} flex={1} bgColor="surface">
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Back Icon */}
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
              align="center"
            >
              Pick your passions!
            </Text>
            <Text
              weight={400}
              fontFamily="regular"
              font={12.5}
              color="subHeading"
              lineHeight={24}
              align="center"
            >
              Choose what excites you, and we’ll tailor your experience!
            </Text>
          </Box>

          {/* Passion Cards */}
          <Box flexDirection="column" mt={40} ph={32}>
            {passionsData.map((item) => {
              const isSelected = user.passions.includes(item.label);
              return (
                <PassionCard
                  key={item.id}
                  icon={<item.icon height={20} width={20} />}
                  label={item.label}
                  color={item.color}
                  selected={isSelected}
                  onPress={() => togglePassion(item.label)}
                />
              );
            })}
          </Box>
        </ScrollView>

        {/* Continue Button */}
        <Box>
          <Button paddingX={19} title="Let’s start" onPress={handleContinue} />
        </Box>
      </Box>
    </KeyboardAvoidingView>
  );
}
