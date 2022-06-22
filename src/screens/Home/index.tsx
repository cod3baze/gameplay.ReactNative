import React, { useCallback, useState } from "react";
import { FlatList, View } from "react-native";

import { ButtonAdd } from "../../components/buttons/Add";
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from "../../components/ListHeader";
import { Profile } from "../../components/Profile";
import { Appointment } from "../../components/Appointment";
import { AppointmentDTO } from "../../dtos/appointment";

import { styles } from "./styles";

const appointments = [
  {
    id: 1,
    guild: { id: 1, name: "Lendários", icon: null, owner: true },
    category: 1,
    date: "22/06 às 20:40h",
    description:
      "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
  },
];

export function Home() {
  const [category, setCategory] = useState<number>(0);

  const handleCategorySelection = useCallback(
    (categoryId: number) => {
      categoryId === category ? setCategory(0) : setCategory(categoryId);
    },
    [category]
  );

  const renderItem = useCallback(
    ({ item }: { item: AppointmentDTO }) => (
      <Appointment data={appointments[0]} />
    ),
    []
  );
  const keyExtractor = useCallback(
    (item: AppointmentDTO) => String(item.id),
    []
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>

      <View>
        <CategorySelect
          categorySelected={category}
          onCategorySelected={handleCategorySelection}
        />

        <View style={styles.content}>
          <ListHeader title="partidas agendadas" subtitle="Total: 7" />

          <FlatList
            data={appointments}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            scrollEventThrottle={16}
            initialNumToRender={5}
          />
        </View>
      </View>
    </View>
  );
}
