import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";
import { Link } from "expo-router";

export default class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Allocations</Text>
        <Link href="/allocations/new">New Allocation</Link>
      </View>
    );
  }
}

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
