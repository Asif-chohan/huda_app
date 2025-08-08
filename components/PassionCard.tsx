import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
// Adjust the path as necessary
interface PassionCardProps {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  color: string;
  onPress?: () => void;
}

export default function PassionCard({
  icon,
  label,
  color,
  onPress,
}: PassionCardProps) {
  return (
    <View>
      <TouchableOpacity
        style={[styles.card, { backgroundColor: color }]}
        onPress={onPress}
      >
        <Ionicons
          name={icon}
          size={20}
          color="#000"
          style={{ marginRight: 10 }}
        />
        <Text style={styles.label}>{label}</Text>
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
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#000",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
});
