import React from "react";

import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { ScrollView } from "react-native";
import { categories } from "../../utils/categories";
import { Category } from "../Category";

import { styles } from "./styles";

type Props = {
  categoryselected: string;
};

export function CategorySelect({ categoryselected }: Props) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map((category) => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={category.id === categoryselected}
        />
      ))}
    </ScrollView>
  );
}
