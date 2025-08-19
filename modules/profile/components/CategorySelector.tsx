import { Assets } from "@/assets/images";
import Box from "@/components/Box";
import Texts from "@/components/Text";
import React from "react";
import { Pressable } from "react-native";
const categories = [
  { name: "Watched", icon: <Assets.Claspperboard /> },
  { name: "Read", icon: <Assets.Book /> },
  { name: "Listened", icon: <Assets.Music /> },
  { name: "Played", icon: <Assets.GamePad /> },
];

interface Props {
  onSelect?: (name: string) => void;
}

export const CategorySelector: React.FC<Props> = ({ onSelect }) => {
  return (
    <Box>
      <Texts
        font={15.5}
        lineHeight={24}
        fontFamily="archivoblack"
        weight={400}
        color="heading"
        mt={28}
        mb={12}
      >
        Select category
      </Texts>

      <Box flexDirection="row" flexWrap="wrap">
        {categories.map((item) => (
          <Pressable
            key={item.name}
            onPress={() => onSelect?.(item.name)}
            style={{
              backgroundColor: "#fff",
              paddingHorizontal: 12,
              paddingVertical: 6,
              borderRadius: 40,
              borderWidth: 1,
              marginRight: 8,
              marginBottom: 10,
              borderColor: "#F0EAE6",
            }}
          >
            <Box flexDirection="row" alignItems="center">
              <Box mr={4}>{item.icon}</Box>
              <Texts font={12} lineHeight={20} weight={400} fontFamily="regular">
                {item.name}
              </Texts>
            </Box>
          </Pressable>
        ))}
      </Box>
    </Box>
  );
};
