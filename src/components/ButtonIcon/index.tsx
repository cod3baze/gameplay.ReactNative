import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import { styles } from "./styles";

import DiscordPNG from "../../assets/discord.png";

type ButtonWithIconProps = TouchableOpacityProps & {
  text?: string;
};

export function ButtonIcon({ text, ...rest }: ButtonWithIconProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordPNG} style={styles.icon} />
      </View>

      <Text style={styles.title}>{text || "Entrar com discord"}</Text>
    </TouchableOpacity>
  );
}
