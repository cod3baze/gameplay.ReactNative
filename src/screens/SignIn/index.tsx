import React, { useCallback } from "react";
import { Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

import { ButtonIcon } from "../../components/ButtonIcon";

import IllustrationPNG from "../../assets/illustration.png";

export function SignIn() {
  const { navigate } = useNavigation();

  const handleSignIn = useCallback(() => {
    navigate("Home");
  }, []);

  return (
    <View style={styles.container}>
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

        <ButtonIcon onPress={handleSignIn} />
      </View>
    </View>
  );
}
