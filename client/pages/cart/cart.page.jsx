import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { CartCard } from "../../components";

import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "./cart";
import { FlatList } from "react-native-web";
import data from "../../components/static";

const renderItems = ({ item }) => {
	return (
		<View>
			{/* <CartCard
				image={item.item.image}
				title={item.item.name}
				price={item.item.price}
			/> */}
		</View>
	);
};

const CartPage = () => {
	return (
		<View style={styles.container}>
			<View>
				<FlatList
					vertical
					showVerticalScrollBar={false}
					data={data}
					// renderItem={renderItems}
				/>
			</View>
			{/* <FlatList
				style={styles.carousel}
				horizontal
				data={data}
				renderItem={renderItems}
				showsHorizontalScrollIndicator={false}
			/> */}
			<TouchableOpacity style={styles.button}>
				<Text style={styles.text}>Checkout</Text>
			</TouchableOpacity>
		</View>
	);
};

export default CartPage;
