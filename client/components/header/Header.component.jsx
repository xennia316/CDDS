import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Linking } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "./header";
import { API_KEY, APP_ID } from "@env";

const Header = (setData) => {
	const [filter, setFilter] = useState("salt");

	const handleText = (newText) => {
		setFilter(newText);
	};
	const searchRecipes = async () => {
		try {
			const url = `https://api.edamam.com/api/food-database/v2/parser?app_id=13d37870&app_key=66e7448d21736de245d5ea20ed9a1771&ingr=salt&nutrition-type=cooking
			`;
			const response = await axios.get(url);
			const data = response.data;
			setData(data);
		} catch {
			console.error("This is an error message");
		}
	};

	return (
		<View style={styles.headerContainer}>
			<View style={styles.wrapper}>
				<View style={styles.viewLeft}>
					<Ionicons name="search-outline" size={18} color="black" />
					<Text style={styles.viewLeftText}>Search</Text>
				</View>
				<View style={styles.textInput}>
					<Ionicons name="location-outline" size={18} color="black" />
					<TextInput
						placeholder="Text Field"
						value={filter}
						onChange={handleText}
						style={styles.textInputField}
					/>
				</View>
			</View>
			<TouchableOpacity
				style={styles.filter}
				onPress={() => {
					searchRecipes;
				}}
			>
				<Ionicons name="ios-filter" size={18} color="white" />
			</TouchableOpacity>
		</View>
	);
};

export default Header;
