import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
// import CheckBox from "@react-native-community/checkbox";

import pic from "../../assets/images/pepperonipizza.png";

import styles from "./verticalCard";

const VerticalCard = () => {
	const [count, setCount] = useState(0);
	const handleAdd = () => setCount(count + 1);
	const handleReduce = () => setCount(count - 1);

	return (
		<View style={styles.container}>
			<View style={styles.row}>
				<View style={styles.imageContainer}>
					<Image source={pic} style={styles.image} />
				</View>
				<View>
					<Text>Memi</Text>
					<View>
						<Text style={[styles.text, { color: "grey" }]}>
							50 gm <Text style={{ color: "black" }}>+$0.40</Text>
						</Text>
					</View>
				</View>
			</View>
			<View style={styles.row}>
				<TouchableOpacity style={styles.button} onPress={handleReduce}>
					<Text style={styles.buttonText}>-</Text>
				</TouchableOpacity>
				<Text style={styles.count}>{count}</Text>
				<TouchableOpacity style={styles.button} onPress={handleAdd}>
					<Text style={styles.buttonText}>+</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.row}>
				<Text style={styles.text}>My Text</Text>
			</View>
		</View>
	);
};

export default VerticalCard;
