import React from "react";
import { View, Text } from "react-native";
import { Avatar } from "../Avatar";

import { styles } from "./styles";

export function Profile() {
  return (
    <View style={styles.container}>
      <Avatar urlImage="https://github.com/amesq01.png" />
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Ola, </Text>
          <Text style={styles.username}>Adailton</Text>
        </View>
        <Text style={styles.message}>Hoje e dia de vitoria!</Text>
      </View>
    </View>
  );
}
