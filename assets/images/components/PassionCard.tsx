import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

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
        <Text style={styles.label}>{label}</Text>
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
    marginRight: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1D1D1D",
    lineHeight: 26,
  },
  checkIcon: {
    marginRight: 6,
  },
});
