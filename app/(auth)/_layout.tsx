// import { Stack } from "expo-router";

// export default function AuthLayout() {
//   return (
//     <Stack screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="index" />

//       <Stack.Screen name="personal-info" />
//       <Stack.Screen name="link-account" />
//       <Stack.Screen name="pick-passion" />
//       <Stack.Screen name="login" />
//       <Stack.Screen name="restore-password" />
//       <Stack.Screen name="new-password" />
//       <Stack.Screen name="onboarding" />
//       <Stack.Screen name="swipe-screen" />
//     </Stack>
//   );
// }
import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" />
      <Stack.Screen name="signup/index" />
      <Stack.Screen name="signup/sign-up" />
      <Stack.Screen name="signup/personal-info" />
      <Stack.Screen name="signup/link-account" />
      <Stack.Screen name="signup/pick-passion" />
      <Stack.Screen name="password/new-password" />
      <Stack.Screen name="password/restore-password" />
    </Stack>
  );
}
