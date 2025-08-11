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

// import Down from "@/assets/images/Down.svg";
// import GoBack from "@/assets/images/GoBack.svg";
import { Assets } from "@/assets/images";
import BottomModal from "@/components/BottomModal";
import AuthButton from "@/components/Button";
import ProfilePhoto from "@/components/ProfilePhoto";
import AuthInput from "@/components/TextInput";
import AuthTitle from "@/components/Title";
import { useUserStore } from "@/store/userStore";
import DateTimePicker from "@react-native-community/datetimepicker";
export default function PersonalInfoScreen() {
  // const [username, setUsername] = useState("");
  // const [pronouns, setPronouns] = useState("");
  // const [bio, setBio] = useState("");
  // const [selectedGender, setSelectedGender] = useState("");
  // const [selectedDate, setSelectedDate] = useState<Date | null>(null);

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

  const formatDate = (date: Date | null) => {
    if (!date) return "";
    const day = date.getDate().toString().padStart(2, "0");
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`; // Output: 07 August, 2025
  };
  const handleApply = () => {
    setModalVisible(false);
    setShowPicker(false);
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
        {/* Back Button */}
        <Pressable style={styles.backIcon} onPress={() => router.back()}>
          <Assets.Back />
        </Pressable>

        {/* Title */}
        <View style={styles.headerWrapper}>
          <AuthTitle
            title="Time to personalize!"
            subtitle="We’d love to know you better!"
          />
        </View>

        <ProfilePhoto />

        {/* Inputs */}
        <View style={styles.inputWrapper}>
          <AuthInput
            label="Username"
            value={user.username}
            onChangeText={(text) => setUser({ username: text })}
          />
          <AuthInput
            editable={false}
            placeholder=""
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
            placeholder=""
            value={formatDate(user.dob)}
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
        </View>

        {/* Button */}
        <View style={styles.buttonWrapper}>
          <AuthButton title="Continue" onPress={handleContinue} />
        </View>
      </ScrollView>
      <BottomModal
        visible={modalVisible}
        title={modalType === "dob" ? "Your birthday" : "Gender"}
        onClose={() => setModalVisible(false)}
        onApply={handleApply}
      >
        {modalType === "dob" ? (
          <View style={{ paddingBottom: 12, alignItems: "center" }}>
            {Platform.OS === "ios" || showPicker ? (
              <DateTimePicker
                value={user.dob || new Date()}
                mode="date"
                display="spinner"
                onChange={(event, date) => {
                  if (Platform.OS === "android") setShowPicker(false);
                  if (date) setUser({ dob: date });
                }}
              />
            ) : (
              <Pressable
                onPress={() => setShowPicker(true)}
                style={{
                  padding: 12,
                  backgroundColor: "#eee",
                  borderRadius: 10,
                }}
              >
                <Text>
                  {user.dob ? formatDate(user.dob) : "Select Date of Birth"}
                </Text>
              </Pressable>
            )}
          </View>
        ) : (
          <View style={{ marginBottom: 12 }}>
            {genderOptions.map((option) => (
              <Pressable
                key={option}
                onPress={() => setUser({ gender: option })}
              >
                <Text
                  style={{
                    fontSize: 16,
                    color: "#1D1D1D",
                    fontWeight: "400",
                    paddingVertical: 10,
                  }}
                >
                  {option}
                </Text>
              </Pressable>
            ))}
          </View>
        )}
      </BottomModal>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FDF4F0",
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    fontFamily: "Inter",
  },
  headerWrapper: {
    marginTop: 28,
  },
  backIcon: {
    paddingVertical: 12,
  },
  photoUpload: {
    alignItems: "center",
    marginVertical: 34,
  },
  avatarPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#F3F3F3",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  avatarImage: {
    width: "100%",
    height: "100%",
  },
  uploadText: {
    color: "#A259FF",
    fontWeight: "700",
    marginTop: 17,
    fontSize: 16,
  },
  inputWrapper: {
    gap: 12,
  },
  buttonWrapper: {
    marginTop: 27,
  },
});
