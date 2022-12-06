import React, { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  Item,
  HeaderButton,
  HeaderButtons,
} from "react-navigation-header-buttons";
import HistoryList from "../components/header/HistoryList";

const Home = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <HistoryList></HistoryList>
    </View>
  );
};

const HeaderButtonComponent = (props) => (
  <HeaderButton
    IconComponent={Ionicons}
    iconSize={23}
    color="#FFF"
    {...props}
  />
);

Home.navigationOptions = (navData) => {
  return {
    headerTitle: "Home",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButtonComponent}>
        <Item
          title="Setting"
          iconName="ios-settings-outline"
          onPress={() => navData.navigation.navigate("Setting")}
        />
        <Item
          title="User"
          iconName="ios-person-circle-outline"
          onPress={() => navData.navigation.navigate("User")}
        />
      </HeaderButtons>
    ),
  };
};

export default Home;
