import React from "react";
import { Text, View, Image, StatusBar } from "react-native";

import { styles } from "./styles";

import { ButtonIcon } from "../../components/ButtonIcon";

import IllustrationPNG from "../../assets/illustration.png";

export function SignIn() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Image
        style={styles.image}
        source={IllustrationPNG}
        resizeMode="stretch"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {"\n"}e organize suas {"\n"}
          Jogatinas
        </Text>
        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {"\n"}
          favoritos com seus amigos!
        </Text>

        <ButtonIcon activeOpacity={0.7} />
      </View>
    </View>
  );
}
