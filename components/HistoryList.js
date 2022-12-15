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
import { useTasks } from '../hooks/useTasks';

const removeItem = () => {}

const Separator = () => (
  <View style={styles.separator} />
);

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Button
      onPress={removeItem}
      title="Remove"
      color="#189AB4"
      style={styles.button}
    />
  </View>
);

const HistoryList = () => {
  const taskList = useTasks();

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={taskList}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <>
            <Separator />
            <Text style={styles.header}>{title}</Text>
          </>
        )}
      />
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 14
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  button: {
    borderRadius: 10
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
});

export default HistoryList;
