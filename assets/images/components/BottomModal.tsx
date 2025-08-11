// components/BottomModal.tsx
import { ReactNode } from "react";
import { Modal, StyleSheet, View } from "react-native";
import Button from "./Button";
import AuthTitle from "./Title";
interface BottomModalProps {
  visible: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  onApply: () => void;
}

export default function BottomModal({
  visible,
  onClose,
  title,
  children,
  onApply,
}: BottomModalProps) {
  return (
    <Modal animationType="slide" transparent visible={visible}>
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          <View style={{ alignItems: "flex-start", marginBottom: 24 }}>
            <AuthTitle fontSize={20} title={title} />
          </View>
          {children}
          <View>
            <Button paddingX={35} title="Apply" onPress={onApply} />
          </View>
          {/* <TouchableOpacity onPress={onClose}  /> */}
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
    paddingBottom: 40,
  },
  // closeArea: {
  //   height: 30,
  // },
});
