import React from "react";
import { View } from "react-native";

import { styles } from "./styles";

import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { Profile } from "../../components/Profile";

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>
      <View>
        <CategorySelect categoryselected="" />
      </View>
    </View>
  );
}
