import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Header from "./components/header/Header.component";

export default function App() {
	return (
		<View style={styles.container}>
			<Header />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		padding: 32,
	},
});
