import React from "react";
import { StyleSheet, Text, View } from "react-native";
import contants from "expo-constants";
import Home from "./screens/Home";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    marginTop: contants.statusBarHeight,
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}
