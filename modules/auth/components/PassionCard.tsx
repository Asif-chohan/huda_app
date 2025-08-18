import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Text from "@/components/Text";
interface PassionCardProps {
  icon: React.ReactNode; // Now accepts any React element (SVG)
  label: string;
  color: string;
  onPress?: () => void;
  selected: boolean;
}
import { Assets } from "@/assets/images";
export default function PassionCard({
  icon,
  label,
  color,
  onPress,
  selected,
}: PassionCardProps) {
  return (
    <View>
      <TouchableOpacity
        style={[styles.card, { backgroundColor: color }]}
        onPress={onPress}
      >
        <View style={styles.iconWrapper}>{icon}</View>
        <Text
          font={12.5}
          fontFamily="semibold"
          weight={600}
          color="heading"
          lineHeight={26}
        >
          {label}
        </Text>
        {selected && <Assets.CheckCircle style={styles.checkIcon} />}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 16, // Radius-SM
    borderWidth: 1,
    borderColor: "#1D1D1D",
    marginBottom: 12,
    shadowColor: "#404040", // NeuralNeural-700 equivalent
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 3, // Android shadow
  },
  iconWrapper: {
    marginRight: 8,
  },
  checkIcon: {
    alignSelf: "flex-end",
  },
});
