import React from "react";
import { View, Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { SvgProps } from "react-native-svg";

import { theme } from "../../global/styles/theme";

import { styles } from "./styles";

type CategoryPresseableProps = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
};

export function Category({
  title,
  icon: Icon,
  checked = false,
  ...rest
}: CategoryPresseableProps) {
  const { secondary80, secondary100 } = theme.colors;

  return (
    <RectButton style={styles.container} {...rest}>
      <LinearGradient
        style={styles.container}
        colors={[secondary100, secondary80]}
      >
        <View style={[styles.content, { opacity: checked ? 1 : 0.5 }]}>
          <View style={checked ? styles.checked : styles.check} />
          <Icon width={48} height={48} />

          <Text style={styles.title}>{title}</Text>
        </View>
      </LinearGradient>
    </RectButton>
  );
}
