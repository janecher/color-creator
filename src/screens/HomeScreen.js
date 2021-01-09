import React, {useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorChangerComponent from "../components/ColorChangerComponent";

const COLOR_INCREMENT = 10;

const HomeScreen = () => {
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
    <View>
      <ColorChangerComponent color="Red" onIncrease={increaseRed} onDecrease={decreaseRed}/>
      <ColorChangerComponent color="Green"  onIncrease = {increaseGreen} onDecrease={decreaseGreen}/>
      <ColorChangerComponent color="Blue"  onIncrease = {increaseBlue} onDecrease={decreaseBlue}/>
      <Text>Color RGB: {colorRgb})</Text>
      <View style={{height: 100, width: 100, backgroundColor: colorRgb}}></View>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default HomeScreen;
