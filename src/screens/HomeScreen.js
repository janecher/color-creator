import React from "react";
import { View, Text, StyleSheet, Button, Touchable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { withOrientation } from "react-navigation";

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Build a color</Text>
      <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate("Color")}>
        <Text style={styles.textStyleStart}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  textStyle: {
    color: "#397365",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    margin: 40
  },
  textStyleStart: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center"
  },
  buttonStyle: {
    backgroundColor: '#3bd1ad',
    borderRadius: 5,
    padding: 10,
    width: 200
  }
});

export default HomeScreen;
