import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Accountsitemlist = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>profit</Text>
      <Text style={styles.percentage}>10%</Text>
      <Text style={styles.percentage}>20%</Text>
    </View>
  );
};

export default Accountsitemlist;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9f9f9",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 5,
  },
  name: {
    fontWeight: "bold",
    fontSize: 20,
  },
  percentage: {},
});
