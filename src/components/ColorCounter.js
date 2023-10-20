import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button
        title={`Increrase ${color}`}
        style={styles.textStyle}
        onPress={() => onIncrease()}
      />
      <Button
        title={`Decrease ${color}`}
        style={styles.textStyle}
        onPress={() => onDecrease()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 50,
    marginLeft: "auto",
    marginRight: "auto",
  },
});

export default ColorCounter;
