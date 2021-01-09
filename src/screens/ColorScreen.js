import React, {useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorChangerComponent from "../components/ColorChangerComponent";

const COLOR_INCREMENT = 10;

const ColorScreen = () => {

  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  
  const setColor = (color, amount) => {
    if(color === "red") {
        if(red + amount < 255 || red - amount > 0) {
            setRed(red + amount);
            return;
        }
    }
    if(color === "green") {
        if(green + amount < 255 || green - amount > 0) {
            setGreen(green + amount);
            return;
        }
    }
    if(color === "blue") {
        if(blue + amount < 255 || blue - amount > 0) {
            setBlue(blue + amount);
            return;
        }
    }
  }

  let colorRgb = `rgb(${red},${green},${blue})`;

  return (
    <View style={styles.container}>
      <ColorChangerComponent color="Red" background='red' onIncrease={()=>setColor("red", COLOR_INCREMENT)} onDecrease={()=>setColor("red", -1*COLOR_INCREMENT)}/>
      <ColorChangerComponent color="Green" background='green' onIncrease={()=>setColor("green", COLOR_INCREMENT)} onDecrease={()=>setColor("green", -1*COLOR_INCREMENT)}/>
      <ColorChangerComponent color="Blue" background='blue' onIncrease={()=>setColor("blue", COLOR_INCREMENT)} onDecrease={()=>setColor("blue", -1*COLOR_INCREMENT)}/>
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
