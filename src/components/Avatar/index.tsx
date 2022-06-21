import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import { Image } from "react-native";

type AvatarProps = {
  uri: string;
};

export function Avatar({ uri }: AvatarProps) {
  const { secondary70, secondary50 } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary50, secondary70]}
    >
      <Image style={styles.avatar} source={{ uri }} />
    </LinearGradient>
  );
}
