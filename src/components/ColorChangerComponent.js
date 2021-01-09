import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, DatePickerIOSBase} from "react-native";

const ColorChangerComponent = ({color, background, onIncrease, onDecrease}) => {
  return (
    <View style={{flexDirection:'row', flexWrap:'wrap', margin:10}}>
        <TouchableOpacity style={{backgroundColor: background, padding: 10, width: 60, borderRadius: 5}} onPress={() => onDecrease()}>
            <Text style={styles.textStyleButton}>-</Text>
        </TouchableOpacity>
        <Text style={{color: background, fontSize: 30, fontWeight: "bold", padding: 10}}>{color}</Text>
        <TouchableOpacity style={{backgroundColor: background, padding: 10, width: 60, borderRadius: 5}} onPress={() => onIncrease()}>
            <Text style={styles.textStyleButton}>+</Text>
        </TouchableOpacity> 
    </View>
  );
};

const styles = StyleSheet.create({
    textStyleButton: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center"
    }
});

export default ColorChangerComponent;