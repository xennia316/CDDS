import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { CartCard } from "../../components";
import styles from "./cart";
import pic from "../../assets/images/mexicangreenwave.png";

const CartPage = () => {
	const [data, setData] = useState([
		{
			id: 1,
			image: pic,
			name: "Pepperoni pizza",
			price: "$5.69",
			rating: "4.0 (1.02k)",
		},
		{
			id: 2,
			image: pic,
			name: "Cheese burgers",
			price: "$12.09",
			rating: "4.1 (3.2k)",
		},
		{
			id: 3,
			image: pic,
			name: "Hamburger ",
			price: "$4.99",
			rating: "4.3 (2.8k)",
		},
		{
			id: 4,
			image: pic,
			name: "Strawberry Ice cream",
			price: "$3.59",
			rating: "4.5 (4.1k)",
		},
		{
			id: 5,
			image: pic,
			name: "Chocolate pudding",
			price: "$4.50",
			rating: "4.12 (3.8k)",
		},
	]);

	const renderItems = ({ item }) => {
		return <CartCard item={item} data={data} setData={setData} />;
	};

	return (
		<View style={styles.container}>
			<FlatList
				style={styles.top}
				vertical
				showVerticalScrollIndicator={false}
				data={data}
				renderItem={renderItems}
				ListEmptyComponent={() => (
					<View style={styles.emptyList}>
						<Text style={styles.textEmpty}>
							You have nothing in your cart for now
						</Text>
					</View>
				)}
			/>
			<TouchableOpacity style={styles.button}>
				<Text style={styles.text}>Checkout</Text>
			</TouchableOpacity>
		</View>
	);
};

export default CartPage;
