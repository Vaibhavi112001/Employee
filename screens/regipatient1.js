import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Model, Alert, TouchableOpacity} from "react-native";
import { TextInput } from "react-native-paper";
import { Card, Button } from "react-native-paper";
import { button1 } from '../common/button'

const styles = StyleSheet.create({
  mycard: {
    color: "#FFFFFF",
    justifyContent: "center",
    margin: 2,
    padding: 20,
  },
  root: {
    flex: 1,
  },
  inputstyle: {
    marginTop: 80,
  },
  button: {
    height: 40,
    border: 50,
    marginBottom: 170,
  },
});

const CreatePatient = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [PhNo, setPhNo] = useState("");
  const [Pass, setPass] = useState("");
  const [CPass, setCPass] = useState("");
  // const [Model, setModel] = useState(false);
  const[errormsg, setErrormsg]= useState("");
  const Sendtobackend= ()=> {
    // console.log(Name,Email,PhNo,Pass,CPass);
    // if(Name==''||
    // Email==''||
    // PhNo==''||
    // Pass==''||
    // CPass==''){
    //   setErrormsg('All fields are required');
    //   return;
    // }
    // else{
    //   if(Pass!=CPass){
    //     setErrormsg("Passwords Do Not Match");
    //     return;
    //   }
    //   else{
        fetch('http://172.20.10.10:19000/Psignup',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({
            "Name":Name,
            "Email":Email,
            "PhNo":PhNo,
            "Pass":Pass,
            "CPass":CPass
          })
        })
        .then(res=>res.json())
        .then(
          data=> {
            console.log(data);
          })
      // }
    }
  // }

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
        Patient Registration
      </Text>

      <View style={StyleSheet.root}>
        <TextInput
          label="Name"
          style={styles.inputstyle}
          value={Name}
          onChangeText={(text) => setName(text)}
          mode="outlined"
        />
        <TextInput
          label="Email"
          value={Email}
          onChangeText={(text) => setEmail(text)}
          mode="outlined"
        />
        <TextInput
          label="Phone Number"
          value={PhNo}
          onChangeText={(text) => setPhNo(text)}
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
          label="Confirm Password"
          value={CPass}
          onChangeText={(text) => setCPass(text)}
          mode="outlined"
        />
      </View>
      <TouchableOpacity
      onPress={()=>{
        Sendtobackend();
      }} 
      >
      <Text style={button1}
        
        >sign up</Text>
</TouchableOpacity>
    </>
  );
};

export default CreatePatient;
