import React from "react";
import { ScrollView } from "react-native";

import { categories } from "../../utils/categories";
import { Category } from "../Category";

import { styles } from "./styles";

type CategorySelectProps = {
  categorySelected: number;
  onCategorySelected: (categoryId: number) => void;
};

export function CategorySelect({
  categorySelected,
  onCategorySelected,
}: CategorySelectProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
      style={styles.container}
    >
      {categories.map((category) => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={category.id === categorySelected}
          onPress={() => onCategorySelected(category.id)}
        />
      ))}
    </ScrollView>
  );
}
