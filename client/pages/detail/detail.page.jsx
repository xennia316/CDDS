import React from "react";

import { View, TouchableOpacity, Text } from "react-native";
import { DetailTop, VerticalCard } from "../../components";
import styles from "./detail";

const DetailPage = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<DetailTop />
			<Text style={styles.heading}>Add Extra Ingredients</Text>
			<VerticalCard />
			<VerticalCard />
			<VerticalCard />

			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate("CartPage")}
			>
				<Text style={styles.text}>Add to Cart</Text>
			</TouchableOpacity>
		</View>
	);
};

export default DetailPage;
