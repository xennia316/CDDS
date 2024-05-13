import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "./footer";

const Footer = ({ navigation }) => {
	const [selectedItem, setSelectedItem] = useState(null);

	const handleItemPress = (index, route) => {
		setSelectedItem(index);
		navigation.navigate(route);
	};
	const colorDeterminer = [
		{ color: "white" },
		{
			backgroundColor: "black",
			borderRadius: "50%",
		},
	];

	return (
		<View style={styles.container}>
			<View style={styles.footer}>
				<TouchableOpacity
					style={[styles.footerItem, selectedItem === 0 && colorDeterminer[1]]}
					onPress={() => {
						handleItemPress(0, "Home");
					}}
				>
					<Ionicons
						style={[
							styles.footerText,
							selectedItem === 0 && colorDeterminer[0],
						]}
						size={20}
						name="ios-home-outline"
						color={"black"}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					style={[styles.footerItem, selectedItem === 1 && colorDeterminer]}
					onPress={() => handleItemPress(1, "")}
				>
					<Ionicons
						style={[
							styles.footerText,
							selectedItem === 1 && colorDeterminer[0],
						]}
						size={20}
						name="ios-mail"
						color={"black"}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					style={[styles.footerItem, selectedItem === 2 && colorDeterminer[1]]}
					onPress={() => {
						handleItemPress(2, "CartPage");
					}}
				>
					<Ionicons
						style={[
							styles.footerText,
							selectedItem === 2 && colorDeterminer[0],
						]}
						size={20}
						name="ios-cart-outline"
						color={"black"}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					style={[styles.footerItem, selectedItem === 3 && colorDeterminer[1]]}
					onPress={() => handleItemPress(3, "")}
				>
					<Ionicons
						style={[
							styles.footerText,
							selectedItem === 3 && colorDeterminer[0],
						]}
						size={20}
						name="ios-notifications-outline"
						color={"black"}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					style={[styles.footerItem, selectedItem === 4 && colorDeterminer[1]]}
					onPress={() => handleItemPress(4, "")}
				>
					<Ionicons
						style={[
							styles.footerText,
							selectedItem === 4 && colorDeterminer[0],
						]}
						size={20}
						name="ios-person-outline"
						color={"black"}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Footer;
