import BottomModal from "@/components/BottomModal"; // adjust path if needed
import React from "react";
import { Pressable } from "react-native";

import { Assets } from "@/assets/images";
import Box from "@/components/Box";
import Text from "@/components/Text";
import { useRouter } from "expo-router";
type OptionsModalProps = {
  visible: boolean;
  onClose: () => void;
};

export default function OptionsModal({ visible, onClose }: OptionsModalProps) {
  const router = useRouter();

  return (
    <BottomModal
      visible={visible}
      onClose={onClose}
      onApply={() => {}}
      showApplyButton={false}
      title=""
    >
      <Box>
        {/* Row - Add */}
        <Pressable onPress={() => {}}>
          <Box flexDirection="row" alignItems="center" mb={20} pv={10}>
            <Assets.postCarousel height={24} width={24} />
            <Text
              ml={16}
              font={12.5}
              lineHeight={24}
              fontFamily="regular"
              weight={400}
              color="heading"
            >
              Add item
            </Text>
          </Box>
        </Pressable>

        {/* Row - Want to read */}
        <Pressable
          onPress={() => {
            router.push("/(profile)/want-read");
            onClose();
          }}
        >
          <Box flexDirection="row" alignItems="center" mb={20} pv={10}>
            <Assets.Checklist height={24} width={24} />
            <Text
              ml={16}
              font={12.5}
              lineHeight={24}
              fontFamily="regular"
              weight={400}
              color="heading"
            >
              Want to read
            </Text>
          </Box>
        </Pressable>

        {/* Row - Mark as finished */}
        <Pressable onPress={() => {}}>
          <Box flexDirection="row" alignItems="center" pv={10}>
            <Assets.CheckCircle height={24} width={24} />
            <Text
              ml={16}
              font={12.5}
              lineHeight={24}
              fontFamily="regular"
              weight={400}
              color="heading"
            >
              Mark as finished
            </Text>
          </Box>
        </Pressable>
      </Box>
    </BottomModal>
  );
}
