import React from "react";
import { View, Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { AppointmentDTO } from "../../dtos/appointment";

import { styles } from "./styles";

type AppointmentPresseableProps = RectButtonProps & {
  data: AppointmentDTO;
};

export function Appointment({ data, ...rest }: AppointmentPresseableProps) {
  return (
    <RectButton style={styles.container} {...rest}>
      <Text>index</Text>
    </RectButton>
  );
}
