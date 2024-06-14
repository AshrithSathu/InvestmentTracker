import { StyleSheet, Text, View } from "react-native";
import React from "react";

const accounts = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Accounts</Text>
    </View>
  );
};

export default accounts;

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
