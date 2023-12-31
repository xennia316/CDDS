import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

import styles from "./cartCard";

const CartCard = () => {
	const [number, setNumber] = useState(4);

	const [showCard, setShowCard] = useState(true);

	// const handleToggleCard = () => {

	// };

	const handleDecrease = () => {
		setNumber(number - 1);
	};

	const handleIncrease = () => {
		setNumber(number + 1);
	};

	const handleClose = () => {
		setShowCard(!showCard);
	};

	return (
		<View style={styles.container}>
			<View style={styles.rowImage}>
				<Image
					source={require("../../assets/images/orange.png")}
					style={styles.image}
				/>
			</View>
			<View style={[styles.textRow]}>
				<View>
					<Text style={[styles.text, styles.largeText]}>Large Text</Text>
					<Text style={[styles.text, styles.mediumText]}>Medium Text</Text>
					<Text style={[styles.text, styles.smallText]}>$18.99</Text>
				</View>
				<View style={styles.controls}>
					<TouchableOpacity style={styles.button} onPress={handleDecrease}>
						<Text style={styles.buttonText}>-</Text>
					</TouchableOpacity>
					<Text style={[styles.text, styles.number]}>{number}</Text>
					<TouchableOpacity style={styles.button} onPress={handleIncrease}>
						<Text style={styles.buttonText}>+</Text>
					</TouchableOpacity>
				</View>
			</View>
			<View style={[styles.row, styles.closeRow]}>
				<TouchableOpacity style={styles.closeButton} onPress={handleClose}>
					<Text style={styles.closeButtonText}>x</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default CartCard;
