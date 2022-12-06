import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
  Button,
} from "react-native";

const DATA = [
  {
    title: "Today",
    data: ["Pizza", "Burger", "Risotto"],
  },
  {
    title: "05 Dez",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"],
  },
  {
    title: "04 Dez",
    data: ["Water", "Coke", "Beer"],
  }
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Button
      title="Remove"
      color="#841584"
    />
  </View>
);

const HistoryList = () => (
  <SafeAreaView style={styles.container}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 14
  },
  item: {
    backgroundColor: "#D4F1F4",
    padding: 20,
    marginVertical: 4,
    borderRadius: 8,
    borderStyle: "solid",
    borderColor: 'black'
  },
  header: {
    fontSize: 14
  },
  title: {
    fontSize: 18
  },
});

export default HistoryList;
