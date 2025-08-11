// import { Assets } from "@/assets/images";
// import { Tabs } from "expo-router";
// import { StyleSheet, Text, TouchableOpacity } from "react-native";
// export default function TabLayout() {
//   return (
//     <Tabs
//       screenOptions={{
//         headerShown: false,
//         tabBarShowLabel: false,
//         tabBarStyle: styles.tabBar,
//       }}
//     >
//       <Tabs.Screen
//         name="index"
//         options={{
//           tabBarIcon: ({ focused }) =>
//             focused ? <Assets.HomeActive /> : <Assets.HomeTab />,
//         }}
//       />
//       <Tabs.Screen
//         name="location"
//         options={{
//           tabBarIcon: ({ focused }) =>
//             focused ? <Assets.CompassActive /> : <Assets.CompassTab />,
//         }}
//       />
//       <Tabs.Screen
//         name="profile"
//         options={{
//           tabBarIcon: ({ focused }) =>
//             focused ? <Assets.UserActive /> : <Assets.UserTab />,
//         }}
//       />

//       <TouchableOpacity style={styles.addButton}>
//         <Assets.AddCircle />
//         <Text style={styles.addText}>Add</Text>
//       </TouchableOpacity>
//     </Tabs>
//   );
// }

// const styles = StyleSheet.create({
//   tabBar: {
//     backgroundColor: "#1D1D1D",
//     borderTopWidth: 0,
//     height: 60,
//     borderRadius: 30,
//     marginHorizontal: 10,
//     marginBottom: 20,
//     paddingHorizontal: 10,
//     position: "absolute",
//   },
//   addButton: {
//     backgroundColor: "#CBB0FF",
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     paddingHorizontal: 14,
//     borderRadius: 20,
//     height: 36,
//     marginTop: 12,
//   },
//   addText: {
//     color: "#000",
//     marginLeft: 6,
//     fontSize: 14,
//     fontWeight: "500",
//   },
// });
// app/_layout.tsx (if using expo-router)
import CustomTabBar from "@/components/CustomTabBar";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="location" />
      <Tabs.Screen name="profile" />
      {/* <Tabs.Screen name="add" /> */}
    </Tabs>
  );
}
