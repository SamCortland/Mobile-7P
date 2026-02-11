import React from "react";
import {StyleSheet, Text, View, } from "react-native";
import OlaMundo from "./components/OlaMundo";

export default function App() {
  return (
    <View style={styles.container}>
      <OlaMundo nome = 'Rafel Marinho' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c70eb77c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  }
});
