import { StyleSheet } from "react-native";

import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginRight: 8,
  },
  content: {
    width: 100,
    height: 116,
    borderRadius: 8,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 7,
    backgroundColor: theme.colors.secondary40,
  },
  checked: {
    width: 13,
    height: 13,
    marginRight: 7,
    borderRadius: 3,
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-end",
  },
  check: {
    width: 12,
    height: 12,
    marginRight: 7,
    borderWidth: 2,
    borderRadius: 3,
    borderColor: theme.colors.secondary50,
    backgroundColor: theme.colors.secondary100,
    alignSelf: "flex-end",
  },
  title: {
    fontFamily: theme.fonts.title500,
    color: theme.colors.heading,
    fontSize: 15,
  },
});
