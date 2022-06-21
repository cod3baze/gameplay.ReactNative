import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";
import { Avatar } from "../Avatar";

export function Profile() {
  return (
    <View style={styles.container}>
      <Avatar uri="https://github.com/eliasallex.png" />
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>olá,</Text>
          <Text style={styles.username}>Eliasallex</Text>
        </View>
        <Text style={styles.message}>Hoje é dia de vitória</Text>
      </View>
    </View>
  );
}
