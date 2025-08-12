import { Assets } from "@/assets/images";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Box from "@/components/Box";
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
      // pl={9.06}
      // pr={3.2}
      // radius={50}
      // mh={10.67}
      // mb={2.99}
      // pv={1.5}

      radius={40}
      justifyContent="space-between"
    >
      {/* <View style={styles.container}> */}
      {/* Home */}
      <Box pr={33}>
        <TouchableOpacity
          style={styles.iconBtn}
          onPress={() => navigation.navigate("index")}
        >
          {state.index === 0 ? <Assets.HomeActive /> : <Assets.HomeTab />}
        </TouchableOpacity>
      </Box>
      {/* Leaf */}
      <Box pr={33}>
        <TouchableOpacity
          style={styles.iconBtn}
          onPress={() => navigation.navigate("location")}
        >
          {state.index === 1 ? <Assets.CompassActive /> : <Assets.CompassTab />}
        </TouchableOpacity>
      </Box>
      {/* Profile */}
      <Box pr={33}>
        <TouchableOpacity
          style={styles.iconBtn}
          onPress={() => navigation.navigate("profile")}
        >
          {state.index === 2 ? <Assets.UserActive /> : <Assets.UserTab />}
        </TouchableOpacity>
      </Box>
      {/* Add Button */}
      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => navigation.navigate("add")} // custom add navigation
      >
        <Assets.AddCircle height={16} width={16} />
        <Text style={styles.addText}>Add</Text>
      </TouchableOpacity>
      {/* </View> */}
    </Box>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flexDirection: "row",
  //   backgroundColor: "#1E1E1E",
  //   alignItems: "center",
  //   paddingLeft: 34,
  //   paddingRight: 12,
  //   paddingVertical: 12,
  //   borderRadius: 50,
  //   marginHorizontal: 40,
  //   marginBottom: 26,
  //   justifyContent: "space-between",
  // },
  iconBtn: {
    // paddingRight: 33,
  },
  addBtn: {
    flexDirection: "row",
    backgroundColor: "#C7A4FF",
    paddingVertical: 9,
    paddingHorizontal: 16,
    borderRadius: 50,
    alignItems: "center",
  },
  addText: {
    marginLeft: 4,
    color: "#1D1D1D",
    fontWeight: "700",
    fontSize: 13,
  },
});
