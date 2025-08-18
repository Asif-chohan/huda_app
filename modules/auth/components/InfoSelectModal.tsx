import { View, Pressable, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import BottomModal from "@/components/BottomModal";
import Text from "@/components/Text";

type InfoSelectModalProps = {
  visible: boolean;
  modalType: "dob" | "gender";
  onClose: () => void;
  onApply: () => void;
  genderOptions: string[];
  dob: Date | null;
  setDob: (date: Date) => void;
  setGender: (gender: string) => void;
  showPicker: boolean;
  setShowPicker: (val: boolean) => void;
};

export default function InfoSelectModal({
  visible,
  modalType,
  onClose,
  onApply,
  genderOptions,
  dob,
  setDob,
  setGender,
  showPicker,
  setShowPicker,
}: InfoSelectModalProps) {
  const formatDate = (date: Date | null) => {
    if (!date) return "";
    const day = date.getDate().toString().padStart(2, "0");
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
  };

  return (
    <BottomModal
      visible={visible}
      title={modalType === "dob" ? "Your birthday" : "Gender"}
      onClose={onClose}
      onApply={onApply}
    >
      {modalType === "dob" ? (
        <View style={{ paddingBottom: 12, alignItems: "center" }}>
          {Platform.OS === "ios" || showPicker ? (
            <DateTimePicker
              value={dob || new Date()}
              mode="date"
              display="spinner"
              onChange={(event, date) => {
                if (Platform.OS === "android") setShowPicker(false);
                if (date) setDob(date);
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
              <Text>{dob ? formatDate(dob) : "Select Date of Birth"}</Text>
            </Pressable>
          )}
        </View>
      ) : (
        <View style={{ marginBottom: 12 }}>
          {genderOptions.map((option) => (
            <Pressable key={option} onPress={() => setGender(option)}>
              <Text
                fontFamily="regular"
                lineHeight={24}
                color="heading"
                weight={400}
                font={12.5}
                pt={10}
                pb={10}
              >
                {option}
              </Text>
            </Pressable>
          ))}
        </View>
      )}
    </BottomModal>
  );
}
