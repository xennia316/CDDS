import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { removeItem } from "../../utils";

import styles from "./cartCard";

const CartCard = ({ item, data, setData }) => {
	const [number, setNumber] = useState(1);
	const handleDecrease = () => {
		number !== 0 && setNumber(number - 1);
	};

	const handleIncrease = () => {
		setNumber(number + 1);
	};

	const handleClose = () => {
		removeItem(item.id, data, setData);
	};

	return (
		<View style={styles.container}>
			<View style={styles.rowImage}>
				<Image
					source={
						item.image ? item.image : require("../../assets/images/orange.png")
					}
					style={styles.image}
				/>
			</View>
			<View style={[styles.textRow]}>
				<View>
					<Text style={[styles.text, styles.largeText]}>
						{item.name ? item.name : "Large Long Text Here"}
					</Text>
					<Text style={[styles.text, styles.smallText]}>
						{item.price ? item.price : `$18.99`}
					</Text>
				</View>
				<View style={styles.controls}>
					<TouchableOpacity
						disabled={number === 0 || number < 0}
						style={styles.button}
						onPress={handleDecrease}
					>
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
