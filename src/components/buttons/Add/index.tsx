import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { theme } from "../../../global/styles/theme";
import { styles } from "./styles";

export function ButtonAdd({ ...rest }: RectButtonProps) {
  return (
    <RectButton style={styles.container} {...rest}>
      <MaterialCommunityIcons
        name="plus"
        size={34}
        color={theme.colors.heading}
      />
    </RectButton>
  );
}
