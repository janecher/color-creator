import React from "react";
import { Button, View, Text, StyleSheet, DatePickerIOSBase} from "react-native";

const ColorChangerComponent = ({color, increase, decrease}) => {
  return (
    <View>
        <Button title="+" onPress={() => increase()}/>
        <Text>{color}</Text> 
        <Button title="-" onPress={() => decrease()}/>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default ColorChangerComponent;