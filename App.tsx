import "react-native-gesture-handler";

import React, { useCallback, useEffect, useState } from "react";
import { Alert, View, StatusBar } from "react-native";
import * as SplashScreen from "expo-splash-screen";

import { loadAsync } from "expo-font";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import {
  Rajdhani_700Bold,
  Rajdhani_500Medium,
} from "@expo-google-fonts/rajdhani";

import { AppRoutes } from "./src/routes";

export default function App() {
  const [appIsReady, setAppIsReady] = useState<boolean>(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await loadAsync({
          Inter_400Regular,
          Inter_500Medium,
          Rajdhani_700Bold,
          Rajdhani_500Medium,
        });
      } catch (e) {
        console.warn(e);
        Alert.alert("Erro", "Erro ao carregar o aplicativo");
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <AppRoutes />
    </View>
  );
}
