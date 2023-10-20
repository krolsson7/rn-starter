import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>COMPOENNTS SCREEn 11 1 </Text>
      <Text style={styles.textStyle}>COMPOENNTS SCREEn 2 2 2 </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 50,
  },
});

export default ComponentsScreen;
