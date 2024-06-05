import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import pic from "../../assets/images/Tomato.png";
import fullstar from "../../assets/images/fullStar.png";

import styles from "./detailTop";

const DetailTop = (item) => {
	console.log(item);
	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.heading}>Italian Hot Pizza</Text>
				<View style={styles.midContainer}>
					<View style={styles.mid}>
						<Image source={pic} style={styles.img} />
						<Text>Pizza Italiano</Text>
					</View>
					<View style={styles.mid}>
						<Image source={fullstar} style={styles.img} />
						<Text>
							4.8<Text style={{ color: "grey" }}>(2.2k review)</Text>
						</Text>
						<Ionicons name="ios-chevron-forward" size={16} />
					</View>
				</View>
			</View>
			<Image style={styles.largeImg} source={pic} />
			<View style={styles.midContainer}>
				<TouchableOpacity>
					<Text style={{ fontWeight: "bold" }}>Details</Text>
				</TouchableOpacity>
				<View style={styles.mid}>
					<Ionicons name="ios-time-outline" size={20} />
					<Text style={{ fontWeight: "300" }}>15 mins</Text>
				</View>
			</View>
			<Text style={styles.text}>
				Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
				Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
				Lorem ipsum Lorem ipsum Lorem ipsum
			</Text>
		</View>
	);
};

export default DetailTop;
