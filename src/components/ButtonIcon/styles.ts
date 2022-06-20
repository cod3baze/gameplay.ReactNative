import { StyleSheet } from "react-native";

import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 56,
    borderRadius: 8,
    backgroundColor: theme.colors.primary,
  },
  iconWrapper: {
    width: 56,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    borderRightColor: theme.colors.line,
  },
  title: {
    flex: 1,
    fontSize: 16,
    textAlign: "center",
    color: theme.colors.heading,
  },
  icon: { width: 24, height: 18 },
});
