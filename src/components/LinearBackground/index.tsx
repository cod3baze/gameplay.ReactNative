import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

type LinearBackgroundProps = {
  children: any;
};

export function LinearBackground({ children }: LinearBackgroundProps) {
  const { secondary80, secondary100 } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary100, secondary80]}
    >
      {children}
    </LinearGradient>
  );
}
