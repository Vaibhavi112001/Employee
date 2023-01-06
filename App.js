import React from "react";
import { StyleSheet, Text, View } from "react-native";
import contants from "expo-constants";
import Home from "./screens/Home";
import CreatePatient from "./screens/regipatient1";
import CreateLab from "./screens/registerlab";
import Start from "./screens/start";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    marginTop: contants.statusBarHeight,
  },
});

function App() {
  return (
    <View style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="start" component={Start} />
        <Stack.Screen name="Patient" component={CreatePatient} />
        <Stack.Screen name="Lab" component={CreateLab} />
      </Stack.Navigator>
    </View>
  );
}
export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};
