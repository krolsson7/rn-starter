import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Button
        title={"Increase"}
        style={styles.textStyle}
        onPress={() => setCounter(counter + 1)}
      />
      <Button
        title={"Decrease"}
        style={styles.textStyle}
        onPress={() => setCounter(counter - 1)}
      />

      <Text style={styles.textStyle}>Counter count: {counter}</Text>
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

export default CounterScreen;
