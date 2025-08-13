// components/CustomModal.tsx
import React from "react";
import {
    Modal,
    Pressable,
    ScrollView,
    StyleSheet,
    View,
} from "react-native";
 // Replace with your imports
import { Assets } from "@/assets/images";
import Box from "@/components/Box";
import Texts from "@/components/Text";

interface CustomModalProps {
  visible: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
    footer?: React.ReactNode; 
}

export default function CustomModal({
  visible,
  onClose,
  title,
  children,
  footer
}: CustomModalProps) {
  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <Box flex={1} justifyContent="flex-end" alignItems="center" bgColor="modalLayer">
        <Box width="100%" height="90%" bgColor="bgSecondary" bTLR={20} bTRR={20}>
          {/* Header */}
          <Box
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            ph={20}
            pt={14}
            pb={25}
          >
            <Pressable onPress={onClose}>
              <Assets.Back />
            </Pressable>
            <Texts font={16} fontFamily="semibold" color="heading">
              {title}
            </Texts>
            <View style={{ width: 24 }} /> {/* Spacer for symmetry */}
          </Box>

          {/* Scrollable Content */}
          <ScrollView style={{ flex: 1, paddingHorizontal: 20 }}>
            {children}
          </ScrollView>
        </Box>



             {/* Optional footer button */}
        {footer && (
          <Box pos="absolute" bottom={44} left={20} right={20}>
            {footer}
          </Box>
        )}
      </Box>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalLayer: {
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});
