import { Assets } from "@/assets/images";
import Box from "@/components/Box";
import Text from "@/components/Text";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
export default function CustomTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  return (
    <Box
      flexDirection="row"
      bgColor="heading"
      alignItems="center"
      pl={34}
      pr={12}
      pv={12}
      mh={40}
      mb={26}
      radius={40}
      justifyContent="space-between"
    >
      {/* Home */}
      <Box pr={33}>
        <TouchableOpacity onPress={() => navigation.navigate("index")}>
          {state.index === 0 ? <Assets.HomeActive /> : <Assets.HomeTab />}
        </TouchableOpacity>
      </Box>
      {/* Leaf */}
      <Box pr={33}>
        <TouchableOpacity onPress={() => navigation.navigate("location")}>
          {state.index === 1 ? <Assets.CompassActive /> : <Assets.CompassTab />}
        </TouchableOpacity>
      </Box>
      {/* Profile */}
      <Box pr={33}>
        <TouchableOpacity onPress={() => navigation.navigate("profile")}>
          {state.index === 2 ? <Assets.UserActive /> : <Assets.UserTab />}
        </TouchableOpacity>
      </Box>
      {/* Add Button */}
      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => navigation.navigate("add")} // custom add navigation
      >
        <Assets.AddCircle height={16} width={16} />
        <Text ml={4} color="heading" fontFamily="bold" font={13}>
          Add
        </Text>
      </TouchableOpacity>
    </Box>
  );
}

const styles = StyleSheet.create({
  addBtn: {
    flexDirection: "row",
    backgroundColor: "#C7A4FF",
    paddingVertical: 9,
    paddingHorizontal: 16,
    borderRadius: 100,
    alignItems: "center",
  },
});
