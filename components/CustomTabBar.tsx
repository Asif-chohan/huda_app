import { Assets } from "@/assets/images";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CustomTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  return (
    <View style={styles.container}>
      {/* Home */}
      <TouchableOpacity
        style={styles.iconBtn}
        onPress={() => navigation.navigate("index")}
      >
        {state.index === 0 ? <Assets.HomeActive /> : <Assets.HomeTab />}
      </TouchableOpacity>

      {/* Leaf */}
      <TouchableOpacity
        style={styles.iconBtn}
        onPress={() => navigation.navigate("location")}
      >
        {state.index === 1 ? <Assets.CompassActive /> : <Assets.CompassTab />}
      </TouchableOpacity>

      {/* Profile */}
      <TouchableOpacity
        style={styles.iconBtn}
        onPress={() => navigation.navigate("profile")}
      >
        {state.index === 2 ? <Assets.UserActive /> : <Assets.UserTab />}
      </TouchableOpacity>

      {/* Add Button */}
      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => navigation.navigate("add")} // custom add navigation
      >
        <Assets.AddCircle />
        <Text style={styles.addText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#1E1E1E",
    alignItems: "center",
    paddingLeft: 34,
    paddingRight: 12,
    paddingVertical: 12,
    borderRadius: 50,
    marginHorizontal: 40,
    marginBottom: 26,
    justifyContent: "space-between",
  },
  iconBtn: {
    padding: 10,
    borderRadius: 50,
  },
  addBtn: {
    flexDirection: "row",
    backgroundColor: "#C7A4FF",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 50,
    alignItems: "center",
  },
  addText: {
    marginLeft: 6,
    color: "#000",
    fontWeight: "500",
    fontSize: 14,
  },
});
