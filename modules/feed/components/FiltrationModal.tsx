// components/FiltrationModal.tsx
import React from "react";
import { Pressable } from "react-native";


import Box from "@/components/Box";
import Buttons from "@/components/Button";
import Texts from "@/components/Text";
import CustomModal from "./CustomModal";

interface FiltrationModalProps {
  visible: boolean;
  onClose: () => void;
  selectedActivity: string | null;
  setSelectedActivity: (val: string | null) => void;
  selectedContent: string | null;
  setSelectedContent: (val: string | null) => void;
  selectedPlatform: string | null;
  setSelectedPlatform: (val: string | null) => void;
  activities: { label: string; color: string; icon: React.ReactNode }[];
  contents: string[];
  platforms: { name: string; icon: React.ReactNode }[];
  onApply: () => void;
}

export default function FiltrationModal({
  visible,
  onClose,
  selectedActivity,
  setSelectedActivity,
  selectedContent,
  setSelectedContent,
  selectedPlatform,
  setSelectedPlatform,
  activities,
  contents,
  platforms,
  onApply,
}: FiltrationModalProps) {
  return (
    <CustomModal visible={visible} onClose={onClose} title="Filter">
      {/* Activity filter */}
      <Texts font={20} weight={400} fontFamily="archivoblack" mb={16}>
        By activity type
      </Texts>
      <Box flexDirection="row" flexWrap="wrap" justifyContent="space-between">
        {activities.map((act) => {
          const isSelected = selectedActivity === act.label;
          return (
            <Pressable
              key={act.label}
              onPress={() => setSelectedActivity(act.label)}
              style={{
                backgroundColor: act.color,
                width: "49%",
                padding: 12,
                marginBottom: 8,
                borderRadius: 16,
                borderWidth: 1,
                borderColor: "#1D1D1D",
                shadowColor: "#1D1D1D",
                shadowOffset: isSelected ? { width: 0, height: 0 } : { width: 3, height: 3 },
                shadowOpacity: isSelected ? 0 : 1,
                shadowRadius: 0,
                opacity: isSelected ? 0.6 : 1,
                alignItems: "center",
              }}
            >
              <Box mb={12}>{act.icon}</Box>
              <Texts weight={400} font={14} fontFamily="archivoblack">
                {act.label}
              </Texts>
            </Pressable>
          );
        })}
      </Box>

      {/* Content filter */}
      <Texts font={20} weight={400} fontFamily="archivoblack" mb={16} mt={40}>
        By type of content
      </Texts>
      <Box flexDirection="row" flexWrap="wrap">
        {contents.map((cont) => (
          <Pressable
            key={cont}
            onPress={() => setSelectedContent(cont)}
            style={{
              backgroundColor: "#fff",
              paddingHorizontal: 12,
              paddingVertical: 6,
              marginLeft: 8,
              marginBottom: 8,
              borderRadius: 40,
              borderWidth: 1,
              borderColor: selectedContent === cont ? "#1D1D1D" : "#F0EAE6",
            }}
          >
            <Texts font={15} fontFamily="regular">{cont}</Texts>
          </Pressable>
        ))}
      </Box>

      {/* Platform filter */}
      <Texts font={20} weight={400} fontFamily="archivoblack" mb={16} mt={32}>
        By platform
      </Texts>
      <Box flexDirection="row" flexWrap="wrap" mb={7}>
        {platforms.map((plat) => (
          <Pressable
            key={plat.name}
            onPress={() => setSelectedPlatform(plat.name)}
            style={{
              backgroundColor: "#fff",
              paddingHorizontal: 12,
              paddingVertical: 6,
              borderRadius: 40,
              borderWidth: 1,
              marginLeft: 8,
              marginBottom: 8,
              borderColor:
                selectedPlatform === plat.name ? "#1D1D1D" : "#F0EAE6",
            }}
          >
            <Box flexDirection="row" alignItems="center">
              <Box mr={4}>{plat.icon}</Box>
              <Texts>{plat.name}</Texts>
            </Box>
          </Pressable>
        ))}
      </Box>

      {/* Apply Button */}
      <Box mb={44}>
        <Buttons
          title="Apply filters"
          onPress={onApply}
          paddingX={32}
          paddingY={16}
        />
      </Box>
    </CustomModal>
  );
}
