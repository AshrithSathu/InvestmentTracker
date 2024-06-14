import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import Accountslist from "../components/Accountslist";

const accounts = () => {
  const [newAccountName, setNewAccountName] = useState("");
  const [newAccountCap, setNewAccountCap] = useState("");
  const [newAccountTap, setNewAccountTap] = useState("");

  const createAccount = () => {
    console.log("create account");
  };
  return (
    <View style={{ gap: 10, padding: 5 }}>
      {/* <Text style={styles.text}>Accounts</Text> */}
      <View style={styles.header}>
        <Text style={styles.text}>Name</Text>
        <Text style={styles.text}>Cap</Text>
        <Text style={styles.text}>Tap</Text>
      </View>
      <Accountslist />
      <View style={styles.inputRow}>
        <TextInput
          value={newAccountName}
          onChangeText={(e) => {
            setNewAccountName(e);
            console.log(e);
          }}
          style={styles.input}
          placeholder="Name"
        />
        <TextInput
          value={newAccountCap}
          onChangeText={(e) => {
            setNewAccountCap(e);
            console.log(e);
          }}
          style={styles.input}
          placeholder="Cap%"
        />
        <TextInput
          value={newAccountTap}
          onChangeText={(e) => {
            setNewAccountTap(e);
            console.log(e);
          }}
          style={styles.input}
          placeholder="Tap%"
        />
      </View>

      <Button title="Add Account" onPress={() => createAccount()} />
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
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "white",
    marginTop: -5,
  },
  input: {
    flex: 1,
  },
});
