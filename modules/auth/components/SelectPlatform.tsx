import React from "react";
import { Modal, ScrollView, TouchableOpacity } from "react-native";

import { Assets } from "@/assets/images";
import Box from "@/components/Box";
import Text from "@/components/Text";
import { PlatformType } from "@/types/auth";

type Props = {
  visible: boolean;
  onClose: () => void;
  availableAccounts: PlatformType[];
  onSelect: (account: PlatformType) => void;
};

export default function SelectPlatformModal({
  visible,
  onClose,
  availableAccounts,
  onSelect,
}: Props) {
  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
      <Box flex={1} justifyContent="flex-end" bgColor="modalLayer">
        <Box
          bgColor="surface"
          ph={20}
          pb={30}
          pt={14}
          bTLR={20}
          bTRR={20}
          height={"94%"}
        >
          {/* Header with Back */}
          <Box
            height={48}
            width={48}
            alignItems="center"
            justifyContent="space-between"
            flexDirection="row"
            mb={16}
          >
            <TouchableOpacity onPress={onClose}>
              <Assets.Back height={21} width={21} />
            </TouchableOpacity>
          </Box>

          {/* List of Accounts */}
          <ScrollView>
            {availableAccounts.map((account) => (
              <Box
                flexDirection="row"
                alignItems="center"
                pv={12}
                key={account.id}
              >
                {/* Icon Wrapper */}
                <Box
                  height={48}
                  width={48}
                  radius={24}
                  bgColor="bg"
                  justifyContent="center"
                  alignItems="center"
                  mr={16}
                >
                  <account.icon />
                </Box>

                <Text
                  font={12.5}
                  fontFamily="regular"
                  weight={400}
                  color="heading"
                  lineHeight={24}
                >
                  {account.name}
                </Text>

                <TouchableOpacity
                  onPress={() => onSelect(account)}
                  style={{ marginLeft: "auto" }}
                >
                  <Assets.Right />
                </TouchableOpacity>
              </Box>
            ))}
          </ScrollView>
        </Box>
      </Box>
    </Modal>
  );
}
