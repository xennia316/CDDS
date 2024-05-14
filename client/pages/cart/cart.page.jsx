import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { CartCard } from "../../components";

import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "./cart";

const CartPage = () => {
	return (
		<View style={styles.container}>
			{/* <View style={styles.top}>
				<TouchableOpacity>
					<Ionicons
						name="ios-arrow-back-circle-outline"
						color="lightgray"
						size={40}
					/>
				</TouchableOpacity>
				<Text style={{ fontSize: 24, width: "60%" }}>My Cart</Text>
			</View> */}
			<CartCard />
			<CartCard />
			<TouchableOpacity style={styles.button}>
				<Text style={styles.text}>Add to Cart</Text>
			</TouchableOpacity>
		</View>
	);
};

export default CartPage;
