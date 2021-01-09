import React, {useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorChangerComponent from "../components/ColorChangerComponent";

const COLOR_INCREMENT = 10;

const ColorScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const increaseRed = () => {
    if(red + COLOR_INCREMENT < 255) {
      setRed(red + COLOR_INCREMENT);
    }
  }

  const increaseGreen = () => {
    if(green + COLOR_INCREMENT < 255) {
      setGreen(green + COLOR_INCREMENT);
    }
  }

  const increaseBlue = () => {
    if(blue + COLOR_INCREMENT < 255) {
      setBlue(blue + COLOR_INCREMENT);
    }
  }

  const decreaseRed = () => {
    if(red - COLOR_INCREMENT> 0) {
      setRed(red - COLOR_INCREMENT);
    }
  }

  const decreaseGreen = () => {
    if(green - COLOR_INCREMENT> 0) {
      setGreen(green - COLOR_INCREMENT);
    }
  }

  const decreaseBlue = () => {
    if(blue - COLOR_INCREMENT> 0) {
      setBlue(blue - COLOR_INCREMENT);
    }
  }

  let colorRgb = `rgb(${red},${green},${blue})`;

  return (
    <View style={styles.container}>
      <ColorChangerComponent color="Red" background='red' onIncrease={increaseRed} onDecrease={decreaseRed}/>
      <ColorChangerComponent color="Green" background='green' onIncrease = {increaseGreen} onDecrease={decreaseGreen}/>
      <ColorChangerComponent color="Blue" background='blue' onIncrease = {increaseBlue} onDecrease={decreaseBlue}/>
      <Text style={styles.textStyle}>Color RGB: {colorRgb}</Text>
      <View style={{height: 200, width: 200, borderRadius: 10, backgroundColor: colorRgb}}></View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 20,
        fontWeight: "bold",
        padding: 20
    }
});

export default ColorScreen;
