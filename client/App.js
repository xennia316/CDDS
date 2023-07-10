import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { FilterOptions, Header } from "./components";

export default function App() {
	return (
		<View style={styles.container}>
			<Header />
			<FilterOptions />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		alignItems: "center",
		paddingVertical: 48,
		paddingHorizontal: 12,
		gap: 12,
	},
});
