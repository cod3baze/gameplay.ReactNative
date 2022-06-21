import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/Home";
import { SignIn } from "../screens/SignIn";
import { LinearBackground } from "../components/LinearBackground";

type AppAuthRoutesParamList = {
  SignIn: undefined;
  Home: undefined;
};

const { Navigator, Screen } = createStackNavigator<AppAuthRoutesParamList>();

const AppAuthRoutes = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: "transparent",
      },
      cardOverlay: () => <LinearBackground />,
    }}
    initialRouteName="SignIn"
  >
    <Screen name="SignIn" component={SignIn} />
    <Screen name="Home" component={Home} />
  </Navigator>
);

export { AppAuthRoutes, AppAuthRoutesParamList };
