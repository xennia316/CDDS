import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

// Importing stylesheet and Icons
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "./header";

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

export default Header;
