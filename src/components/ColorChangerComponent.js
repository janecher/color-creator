import React from "react";
import { Button, View, Text, StyleSheet, DatePickerIOSBase} from "react-native";

const ColorChangerComponent = ({color, onIncrease, onDecrease}) => {
  return (
    <View style={{flexDirection:'row', flexWrap:'wrap'}}>
        <View style={styles.buttonContainer}>
            <Button title="+" onPress={() => onIncrease()}/>
        </View>
        <Text>{color}</Text> 
        <View style={styles.buttonContainer}>
            <Button title="-" onPress={() => onDecrease()}/>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#2E9298',
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 10,
        shadowOpacity: 0.25
      }
});

export default ColorChangerComponent;