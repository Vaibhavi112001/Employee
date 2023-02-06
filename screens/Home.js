import React from "react";
import { StyleSheet, Text, View, Image, Alert } from "react-native";
import { Card, Button } from "react-native-paper";

const Home = (props) => {
  return (
    <>
      <Card style={styles.mycard}>
        <Text style={styles.text}>Health Me</Text>
        <Text style={styles.text1}>
          A secure and reliable medical document application
        </Text>
      </Card>
      <View style={styles.myimage}>
        <Image
          style={{
            width: 200,
            height: 200,
          }}
          source={require("../assets/IMG-20221202-WA0006.jpg")}
        />
      </View>
      <View style={styles.button}>
        <Button
          onPress={() => props.navigation.navigate("start")}
          mode="contained"
          color="#ADD8E6"
          //onPress={() => Alert.alert("Button with adjusted color pressed")}
          // onPress={Alert.alert("You clicked the button")}
        >
          SIGN UP
        </Button>
      </View>
      <View style={styles.text2}>
        <Text>
          Already have an account?
          <Button mode="contained">LOG IN</Button>
        </Text>
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
  text1: {
    fontSize: 10,
    fontStyle: "Playfair Display",
    marginLeft: 70,
  },
  text2: {
    fontSize: 10,
    marginLeft: 100,
    marginBottom: 170,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    // height: 40,
    // border: 50,
    marginBottom: 100,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Home;
