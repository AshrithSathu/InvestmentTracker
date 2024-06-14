import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const newallocation = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>New Allocations</Text>
    </View>
  );
};

export default newallocation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
  },
});
