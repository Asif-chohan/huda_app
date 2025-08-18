import { useRouter } from "expo-router";
import { useState } from "react";
import { KeyboardAvoidingView, Pressable, ScrollView } from "react-native";

import { Assets } from "@/assets/images";
import { useUserStore } from "@/store/userStore";

import AuthButton from "@/components/Button";
import AuthInput from "@/components/TextInput";
import ProfilePhoto from "@/modules/auth/components/ProfilePhoto";
import InfoSelectModal from "@/modules/auth/components/InfoSelectModal";

import Box from "@/components/Box";
import Text from "@/components/Text";

export default function PersonalInfo() {
  const [modalVisible, setModalVisible] = useState(false);
  const [showPicker, setShowPicker] = useState(false);
  const [modalType, setModalType] = useState<"dob" | "gender">("dob");
  const router = useRouter();

  const { user, setUser } = useUserStore();

  const handleContinue = () => {
    router.push("/(auth)/signup/link-account");
  };

  const genderOptions = [
    "Male",
    "Female",
    "Non-Binary / Other",
    "Prefer not to say",
  ];

  const handleApply = () => {
    setModalVisible(false);
    setShowPicker(false);
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <Box pt={50} ph={16} flex={1} bgColor="surface">
        <ScrollView keyboardShouldPersistTaps="handled">
          {/* Back Button */}
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

          {/* Title */}
          <Box ph={4} mt={28}>
            <Text
              fontFamily="archivoblack"
              font={22}
              color="heading"
              lineHeight={31}
              align="center"
            >
              Time to personalize!
            </Text>
            <Text
              fontFamily="regular"
              font={13}
              color="subHeading"
              lineHeight={24}
              align="center"
            >
              We’d love to know you better
            </Text>
          </Box>

          {/* Profile Photo */}
          <ProfilePhoto />

          {/* Inputs */}
          <Box gap={12} ph={4}>
            <AuthInput
              label="Username"
              value={user.username}
              onChangeText={(text) => setUser({ username: text })}
            />

            <AuthInput
              editable={false}
              value={user.gender}
              label="Gender"
              endIcon={
                <Pressable
                  onPress={() => {
                    setModalType("gender");
                    setModalVisible(true);
                  }}
                >
                  <Assets.Down />
                </Pressable>
              }
            />

            <AuthInput
              label="Use of pronouns (optional)"
              value={user.pronouns}
              onChangeText={(text) => setUser({ pronouns: text })}
            />

            <AuthInput
              editable={false}
              value={
                user.dob
                  ? user.dob.toLocaleDateString("en-US", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })
                  : ""
              }
              label="DOB"
              endIcon={
                <Pressable
                  onPress={() => {
                    setModalType("dob");
                    setModalVisible(true);
                  }}
                >
                  <Assets.Down />
                </Pressable>
              }
            />

            <AuthInput
              label="Bio"
              value={user.bio}
              onChangeText={(text) => setUser({ bio: text })}
              multiline
              numberOfLines={4}
            />
          </Box>
        </ScrollView>

        {/* Fixed Button */}
        <Box pos="absolute" bottom={44} mt={27} left={16} right={16}>
          <AuthButton title="Continue" onPress={handleContinue} />
        </Box>
      </Box>

      {/* Modal */}
      <InfoSelectModal
        visible={modalVisible}
        modalType={modalType}
        onClose={() => setModalVisible(false)}
        onApply={handleApply}
        genderOptions={genderOptions}
        dob={user.dob}
        setDob={(date) => setUser({ dob: date })}
        setGender={(gender) => setUser({ gender })}
        showPicker={showPicker}
        setShowPicker={setShowPicker}
      />
    </KeyboardAvoidingView>
  );
}
