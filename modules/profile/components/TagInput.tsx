import { Assets } from "@/assets/images";
import Box from "@/components/Box";
import Texts from "@/components/Text";
import { useModal } from "@/hooks/useModal";
import React from "react";
import { Pressable } from "react-native";

export const TagInput = () => {
    const { openModal, closeModal, isModalVisible } = useModal();
  return (
    <Box flexDirection="row">
        <Pressable onPress={() => {
            closeModal();
            openModal("addTag")
        }}>
      <Assets.AddColCirclefrom width={20} height={20} />
        </Pressable>
      <Texts
        ml={4}
        font={12.5}
        fontFamily="bold"
        mb={8}
        weight={700}
        color="primary"
        lineHeight={24}
      >
        Add tag
      </Texts>
    

      <Box flexDirection="row" flexWrap="wrap" ml={20} >
        <Box
          flexDirection="row"
          alignItems="center"
          bgColor="bg"
          radius={40}
          ph={12}
          pv={6}
          mr={8}
          mb={8}
        >
          <Texts font={13} color="heading">
            #beetlejuice
          </Texts>
        </Box>
      </Box>
    </Box>
  );
};
