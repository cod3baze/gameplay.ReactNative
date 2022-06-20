import { StyleSheet } from "react-native";

import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.secondary100,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 360,
  },
  content: {
    marginTop: -40,
    paddingHorizontal: 30,
  },
  title: {
    textAlign: "center",
    fontSize: 40,
    marginBottom: 16,
    color: theme.colors.heading,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 15,
    marginBottom: 64,
    color: theme.colors.heading,
  },
});
