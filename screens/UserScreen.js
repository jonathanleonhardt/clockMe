import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const User = () => {
return (
	<View style={{ flex: 1, alignItems: "center",
				justifyContent: "center" }}>
	<Text style={{ color: "#189AB4", fontSize: 40 }}>
		User Screen!
	</Text>
	<Ionicons name="ios-person-circle-outline"
				size={80} color="#189AB4" />
	</View>
);
};

User.navigationOptions = (navData) => {
return {
	headerTitle: navData.navigation.getParam("username"),
};
};

export default User;
