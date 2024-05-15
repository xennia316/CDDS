import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { CartCard } from "../../components";

import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "./cart";
import { FlatList } from "react-native-web";
import data from "../../components/static";

const renderItems = (item) => {
	return (
		<>
			<CartCard
				image={item.item.image}
				title={item.item.name}
				price={item.item.price}
			/>
		</>
	);
};

const CartPage = () => {
	return (
		<View style={styles.container}>
			<FlatList data={data} renderItem={renderItems} />
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
