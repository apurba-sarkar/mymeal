import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

import { CATEGORIES } from "../dummy";

function renderCatergoryItem(item) {
  return;
}

const Categories = () => {
  return (
    <View>
      <Text>Categories</Text>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.id}</Text>}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({});
