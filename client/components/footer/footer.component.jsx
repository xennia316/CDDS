import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "./footer";

const Footer = () => {
	const [selectedItem, setSelectedItem] = useState(null);

	const handleItemPress = (index) => {
		setSelectedItem(index);
	};

	return (
		<View style={styles.container}>
			<View style={styles.footer}>
				<TouchableOpacity
					style={[
						styles.footerItem,
						selectedItem === 0 && {
							backgroundColor: "black",
							borderRadius: "50%",
						},
					]}
					onPress={() => handleItemPress(0)}
				>
					<Ionicons
						style={[
							styles.footerText,
							selectedItem === 0 && { color: "white" },
						]}
						size={20}
						name="ios-home-outline"
						color={"black"}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					style={[
						styles.footerItem,
						selectedItem === 1 && {
							backgroundColor: "black",
							borderRadius: "50%",
						},
					]}
					onPress={() => handleItemPress(1)}
				>
					<Ionicons
						style={[
							styles.footerText,
							selectedItem === 1 && { color: "white" },
						]}
						size={20}
						name="ios-mail"
						color={"black"}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					style={[
						styles.footerItem,
						selectedItem === 2 && {
							backgroundColor: "black",
							borderRadius: "50%",
						},
					]}
					onPress={() => handleItemPress(2)}
				>
					<Ionicons
						style={[
							styles.footerText,
							selectedItem === 2 && {
								color: "white",
							},
						]}
						size={20}
						name="ios-cart-outline"
						color={"black"}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					style={[
						styles.footerItem,
						selectedItem === 3 && {
							backgroundColor: "black",
							borderRadius: "50%",
						},
					]}
					onPress={() => handleItemPress(3)}
				>
					<Ionicons
						style={[
							styles.footerText,
							selectedItem === 3 && { color: "white" },
						]}
						size={20}
						name="ios-notifications-outline"
						color={"black"}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					style={[
						styles.footerItem,
						selectedItem === 4 && {
							backgroundColor: "black",
							borderRadius: "50%",
						},
					]}
					onPress={() => handleItemPress(4)}
				>
					<Ionicons
						style={[
							styles.footerText,
							selectedItem === 4 && { color: "white" },
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
