import React, { useCallback } from "react";
import { Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

import { ButtonIcon } from "../../components/ButtonIcon";

import IllustrationPNG from "../../assets/illustration.png";
import { RectButton } from "react-native-gesture-handler";

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
          Conecte-se {"\n"}e marque suas {"\n"}
          Jogatinas
        </Text>
        <Text style={styles.subtitle}>
          Crie Equipas para marcar partidas de{"\n"}
          futebol com seus amigos!
        </Text>

        <ButtonIcon />

        <RectButton
          onPress={handleSignIn}
          activeOpacity={0.9}
          style={styles.searchTeams}
        >
          <Text style={styles.searchTeamsText}>buscar equipas</Text>
        </RectButton>
      </View>
    </View>
  );
}
