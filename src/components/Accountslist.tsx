import { StyleSheet, FlatList } from "react-native";
import React from "react";
import Accountsitemlist from "./Accountsitemlist";

const Accountslist = () => {
  return (
    <FlatList
      contentContainerStyle={{ gap: 5 }}
      data={[1, 2, 3]}
      renderItem={({ item }) => <Accountsitemlist />}
    />
  );
};

export default Accountslist;

const styles = StyleSheet.create({});
