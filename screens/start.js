import React from "react";
import { StyleSheet, Text, View, Image, Alert } from "react-native";
import { Card, Button } from "react-native-paper";

const Start = (props) => {
  return (
    <>
      <View style={styles.myimage}>
        <Image
          style={{
            width: 200,
            height: 200,
          }}
          source={require("../assets/IMG-20221202-WA0006.jpg")}
        />
      </View>
      <Text style={styles.text}>Health Me</Text>
      <View style={styles.button}>
        <Button
          mode="contained"
          onPress={() => props.navigation.navigate("Patient")}
          //onPress={() => console.log("Pressed patient")}
        >
          Patient
        </Button>
      </View>
      <View style={styles.button1}>
        <Button
          mode="contained"
          onPress={() => props.navigation.navigate("Lab")}
        >
          Lab
        </Button>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  mycard: {
    color: "#FFFFFF",
    justifyContent: "center",
    margin: 2,
    padding: 8,
  },
  myimage: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 70,
  },
  text: {
    fontSize: 20,
    fontStyle: "Playfair Display",
    marginLeft: 125,
  },
  button: {
    height: 40,
    border: 50,
    marginTop: 50,
    flexDirection: "column",
    justifyContent: "center",
    // alignItems: "center",
  },
  button1: {
    height: 100,
    border: 50,
    marginBottom: 100,
    flexDirection: "column",
    justifyContent: "center",
    // alignItems: "center",
  },
});
export default Start;
