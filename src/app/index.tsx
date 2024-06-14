import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Accountsitemlist from "../components/Accountsitemlist";
import Accountslist from "../components/Accountslist";

const accounts = () => {
  return (
    <View style={{ gap: 10, padding: 5 }}>
      {/* <Text style={styles.text}>Accounts</Text> */}
      <View style={styles.header}>
        <Text style={styles.text}>Name</Text>
        <Text style={styles.text}>Cap</Text>
        <Text style={styles.text}>Tap</Text>
      </View>
      <Accountslist />
    </View>
  );
};

export default accounts;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
