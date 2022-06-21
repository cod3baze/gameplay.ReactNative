import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { LinearBackground } from "../components/LinearBackground";

import { AppAuthRoutes } from "./auth.routes";

const AppRoutes = () => (
  <LinearBackground>
    <NavigationContainer>
      <AppAuthRoutes />
    </NavigationContainer>
  </LinearBackground>
);

export { AppRoutes };
