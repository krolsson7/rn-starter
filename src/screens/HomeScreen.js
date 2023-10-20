import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  const pressComponents = () => {
    navigation.navigate("Components");
  };
  const pressList = () => {
    navigation.navigate("List");
  };
  const pressImage = () => {
    navigation.navigate("Image");
  };
  const pressCounter = () => {
    navigation.navigate("Counter");
  };
  const pressColor = () => {
    navigation.navigate("Color");
  };
  const pressSquare = () => {
    navigation.navigate("Square");
  };

  const pressAdjustColor = () => {
    navigation.navigate("AdjustColor");
  };

  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        style={styles.button}
        title="Components"
        onPress={pressComponents}
      />
      <Button style={styles.button} title="List" onPress={pressList} />
      <Button style={styles.button} title="Image" onPress={pressImage} />
      <Button style={styles.button} title="Counter" onPress={pressCounter} />
      <Button style={styles.button} title="Color" onPress={pressColor} />
      <Button style={styles.button} title="Square" onPress={pressSquare} />
      <Button
        style={styles.button}
        title="AdjustColor"
        onPress={pressAdjustColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  button: {
    marginBottom: 20,
  },
});

export default HomeScreen;
