import { useColorScheme } from "@/hooks/useColorScheme";
import { useUserStore } from "@/store/userStore"; // <-- your Zustand or Redux store
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import "react-native-reanimated";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loading, setLoading] = useState(true);
  const [isFirstLaunch, setIsFirstLaunch] = useState(false);
  // Get user from store
  const user = useUserStore((state) => state.user);

  // Load fonts
  const [fontsLoaded] = useFonts({
    ArchivoBlack: require("../assets/fonts/ArchivoBlack-Regular.ttf"),
    Inter: require("../assets/fonts/InterDisplay-Regular.ttf"),
  });

  useEffect(() => {
    const checkAppState = async () => {
      try {
        const hasLaunched = await AsyncStorage.getItem("hasLaunched");

        if (!hasLaunched) {
          setIsFirstLaunch(true);
          await AsyncStorage.setItem("hasLaunched", "true");
        }
        console.log("App has launched before:", hasLaunched);
      } catch (error) {
        console.error("Error checking app state:", error);
      } finally {
        setLoading(false);
      }
    };

    checkAppState();
  }, []);
  console.log("User in RootLayout:", user);
  console.log("Is first launch:", isFirstLaunch);
  // Show loader while fonts or app state are loading
  // if (!fontsLoaded || loading) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
  //       <ActivityIndicator size="large" />
  //     </View>
  //   );
  // }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        {isFirstLaunch ? (
          // First-time launch → onboarding stack
          <Stack.Screen name="(onboarding)" />
        ) : user ? (
          // Logged in → home stack
          <Stack.Screen name="(tabs)" />
        ) : (
          // Logged out → auth stack
          <Stack.Screen name="(auth)" />
        )}
        <Stack.Screen name="+not-found" />
      </Stack>
      {/* <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="(onboarding)" />
        <Stack.Screen name="+not-found" />
      </Stack> */}

      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
