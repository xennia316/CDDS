import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { CartCard } from "../../components";

import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "./cart";
import { FlatList } from "react-native";
import data from "../../components/static";

const renderItems = ({ item }) => {
	return <CartCard image={item.image} title={item.name} price={item.price} />;
};

const CartPage = () => {
	return (
		<View style={styles.container}>
			<View style={styles.top}>
				<FlatList
					vertical
					showVerticalScrollBar={false}
					data={data}
					renderItem={renderItems}
				/>
			</View>
			<TouchableOpacity style={styles.button}>
				<Text style={styles.text}>Checkout</Text>
			</TouchableOpacity>
		</View>
	);
};

export default CartPage;
