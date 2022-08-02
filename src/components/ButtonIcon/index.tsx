import React from "react";
import { View, Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./styles";

type ButtonWithIconProps = RectButtonProps & {
  text?: string;
};

export function ButtonIcon({ text, ...rest }: ButtonWithIconProps) {
  return (
    <RectButton style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Ionicons name="ios-enter-outline" size={28} color="#DEDEDE" />
      </View>

      <Text style={styles.title}>{text || "Fazer cadastro"}</Text>
    </RectButton>
  );
}
