import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Alert } from "react-native";
import { TextInput } from "react-native-paper";
import { Card, Button } from "react-native-paper";

const styles = StyleSheet.create({
  mycard: {
    color: "#FFFFFF",
    justifyContent: "center",
    margin: 2,
    padding: 20,
  },
  root: {
    flex: 1,
    // marginBottom: 150,
    // marginTop: 160,
    // justifyContent: "center",
  },
  // inputstyle: {
  //   marginTop: 80,
  // },
  button: {
    height: 40,
    border: 50,
    marginBottom: 160,
  },
});

const CreatLabs = () => {
  const [LabName, setLabName] = useState("");
  const [Email, setEmail] = useState("");
  const [Address, setAddress] = useState("");
  const [LabPhNo, setLabPhNo] = useState("");
  const [Pass, setPass] = useState("");
  const [CPass, setCPass] = useState("");

  return (
    <>
      <View>
        <Card style={styles.mycard}>
          <Image
            style={{ width: 50, height: 50 }}
            source={require("../assets/IMG-20221202-WA0006.jpg")}
          />
          <Text style={styles.text}>Health Me</Text>
        </Card>
      </View>
      <Text
        style={{
          fontSize: 30,
        }}
      >
        Lab Registration
      </Text>

      <View style={StyleSheet.root}>
        <TextInput
          label="Lab Name"
          //style={styles.inputstyle}
          value={LabName}
          onChangeText={(text) => setLabName(text)}
          mode="outlined"
        />
        <TextInput
          label="Email"
          value={Email}
          onChangeText={(text) => setEmail(text)}
          mode="outlined"
        />
        <TextInput
          label="Lab Address"
          value={Address}
          onChangeText={(text) => setAddress(text)}
          mode="outlined"
        />
        <TextInput
          label="Lab Phone Number"
          value={LabPhNo}
          onChangeText={(text) => setLabPhNo(text)}
          keyboardType="number-pad"
          mode="outlined"
        />
        <TextInput
          label="Password"
          value={Pass}
          onChangeText={(text) => setPass(text)}
          mode="outlined"
        />
        <TextInput
          label="Confirm Passord"
          value={CPass}
          onChangeText={(text) => setCPass(text)}
          keyboardType="visible-password"
          mode="outlined"
        />
      </View>
      <View style={styles.button}>
        <Button
          mode="contained"
          //onPress={() => console.log("Pressed")}
          onPress={() => Alert.alert("You clicked the button")}
        >
          sign up
        </Button>
      </View>
    </>
  );
};

export default CreatLabs;
