import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    width: "100%",
    paddingHorizontal: 24,
    marginTop: getStatusBarHeight() + 24,
    marginBottom: 42,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  addTeams: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: theme.colors.secondary50,
    backgroundColor: theme.colors.secondary100,
  },
  addTeamsText: {
    fontSize: 18,
    marginLeft: 5,
    color: theme.colors.heading,
    fontFamily: theme.fonts.title700,
  },
  content: {
    marginTop: 42,
  },
});
