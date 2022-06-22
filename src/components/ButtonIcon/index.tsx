import React from "react";
import { View, Text, Image } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { styles } from "./styles";

import DiscordPNG from "../../assets/discord.png";

type ButtonWithIconProps = RectButtonProps & {
  text?: string;
};

export function ButtonIcon({ text, ...rest }: ButtonWithIconProps) {
  return (
    <RectButton style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordPNG} style={styles.icon} />
      </View>

      <Text style={styles.title}>{text || "Entrar com discord"}</Text>
    </RectButton>
  );
}
