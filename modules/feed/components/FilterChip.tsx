import React from "react";
import { View, Pressable } from "react-native";
import { SvgProps } from "react-native-svg";
import { Assets } from "@/assets/images"; // adjust path
import Texts from "@/components/Text"; // adjust path

interface FilterChipProps {
  label: string;
  onRemove: () => void;
  icon?: React.FC<SvgProps> | null;
}

export const FilterChip: React.FC<FilterChipProps> = ({
  label,
  onRemove,
  icon: Icon,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderColor: "#F0EAE5",
        borderRadius: 40,
        borderWidth: 1,
      }}
    >
      {Icon && <Icon width={20} height={20} />}
      <Texts
        font={12}
        color="textSecondary"
        style={{ marginLeft: Icon ? 6 : 0 }}
      >
        {label}
      </Texts>
      <Pressable onPress={onRemove}>
        <Assets.Close style={{ marginLeft: 8 }} />
      </Pressable>
    </View>
  );
};
