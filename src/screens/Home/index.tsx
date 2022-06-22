import React, { useCallback, useState } from "react";
import { View } from "react-native";

import { ButtonAdd } from "../../components/buttons/Add";
import { CategorySelect } from "../../components/CategorySelect";
import { Profile } from "../../components/Profile";

import { styles } from "./styles";

export function Home() {
  const [category, setCategory] = useState<number>(0);

  const handleCategorySelection = useCallback(
    (categoryId: number) => {
      categoryId === category ? setCategory(0) : setCategory(categoryId);
    },
    [category]
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
      </View>
    </View>
  );
}
