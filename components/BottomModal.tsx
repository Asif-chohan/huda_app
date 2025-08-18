// components/BottomModal.tsx
import { ReactNode } from "react";
import { Modal, StyleSheet, TouchableOpacity, View } from "react-native";
import Button from "./Button";
import Text from "./Text";
// import AuthTitle from "./Title";
interface BottomModalProps {
  visible: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  onApply: () => void;
  showApplyButton?: boolean;
}

export default function BottomModal({
  visible,
  onClose,
  title,
  children,
  onApply,
  showApplyButton = true,
}: BottomModalProps) {
  return (
    <Modal animationType="slide" transparent visible={visible}>
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          <View style={{ alignItems: "flex-start", marginBottom: 24 }}>
            <Text
              fontFamily="regular"
              weight={400}
              font={15.5}
              color="heading"
              lineHeight={24}
            >
              {title}
            </Text>
          </View>
          {children}

          {showApplyButton && (
            <View>
              <Button
                paddingX={35.5}
                paddingY={16}
                title="Apply"
                onPress={onApply || (() => {})}
              />
            </View>
          )}
          <TouchableOpacity onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  modalContent: {
    backgroundColor: "#FDF4F0",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 44,
  },
  // closeArea: {
  //   height: 30,
  // },
});
