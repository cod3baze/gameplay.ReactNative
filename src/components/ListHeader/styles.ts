import { theme } from "./../../global/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 22,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight,
  },
});
