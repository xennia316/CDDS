import React from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Header = () => {
	return (
		<View style={styles.headerContainer}>
			<View style={styles.wrapper}>
				<View style={styles.viewLeft}>
					<Ionicons name="search-outline" size={18} color="black" />
					<Text style={styles.viewLeftText}>Search</Text>
				</View>
				<View style={styles.textInput}>
					<Ionicons name="location-outline" size={18} color="black" />
					<TextInput placeholder="Text Field" style={styles.textInputField} />
				</View>
			</View>
			<TouchableOpacity style={styles.filter}>
				<Ionicons name="ios-filter" size={18} color="white" />
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	headerContainer: {
		flexDirection: "row",
		gap: 12,
	},
	wrapper: {
		backgroundColor: "#fff",
		borderColor: "gray",
		borderRadius: 24,
		borderWidth: 1,
		width: "75%",
		flexDirection: "row",
		height: 40,
		justifyContent: "space-between",
		padding: 8,
	},
	textInput: {
		flex: 1,
		width: "50%",
		flexDirection: "row",
		justifyContent: "flex-end",
		borderLeftWidth: 1,
		borderLeftColor: "#E8E8EC",
		padding: 2,
		gap: 4,
	},
	viewLeft: {
		flex: 1,
		width: "50%",
		alignSelf: "center",
		flexDirection: "row",
		alignItems: "center",
		gap: 4,
	},

	viewLeftText: {
		color: "#AAABB3",
	},

	filter: {
		backgroundColor: "#FF8C3E",
		width: 40,
		height: 40,
		borderRadius: "50%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
});

export default Header;
