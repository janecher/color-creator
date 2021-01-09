import React, {useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorChangerComponent from "../components/ColorChangerComponent";

const HomeScreen = () => {
  const [colorObject, setColorObject] = useState({red: 0, green: 0, blue: 0})

  const increaseColor = (property) => {
    if(colorObject[property] < 255) {
      setColorObject(colorObject[property]++);
    }
  }

  const decreaseColor = () => {
    if(colorObject[property] > 0) {
      setColorObject(colorObject[property]--);
    }
  }

  let colorRgb = "rgb("+colorObject["red"] + ","+ colorObject["red"]+","+ colorObject["red"] + ")";

  return (
    <View>
      <ColorChangerComponent color="Red" increase={increaseColor("red")} decrease={increaseColor("red")}/>
      <ColorChangerComponent color="Green"  increase = {increaseColor("green")} decrease={increaseColor("green")}/>
      <ColorChangerComponent color="Blue"  increase = {increaseColor("blue")} decrease={increaseColor("blue")}/>
      <Text>Color rgb</Text>
      <View style={{height: 100, width: 100, backgroundColor: colorRgb}}></View>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default HomeScreen;
