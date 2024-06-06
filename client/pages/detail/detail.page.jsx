import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { DetailTop, VerticalCard } from "../../components";
import styles from "./detail";
import detailTopStyles from "../../components/detailTop/detailTop.js";
import pic from "../../assets/images/Tomato.png";
import fullstar from "../../assets/images/fullStar.png";

const DetailPage = ({ navigation }) => {
	console.log(navigation);
	return (
		<View style={styles.container}>
			<View style={detailTopStyles.container}>
				<View>
					<Text style={detailTopStyles.heading}>Italian Hot Pizza</Text>
					<View style={detailTopStyles.midContainer}>
						<View style={detailTopStyles.mid}>
							<Image source={pic} style={detailTopStyles.img} />
							<Text>Pizza Italiano</Text>
						</View>
						<View style={detailTopStyles.mid}>
							<Image source={fullstar} style={detailTopStyles.img} />
							<Text>
								4.8<Text style={{ color: "grey" }}>(2.2k review)</Text>
							</Text>
							<Ionicons name="ios-chevron-forward" size={16} />
						</View>
					</View>
				</View>
				<Image style={detailTopStyles.largeImg} source={pic} />
				<View style={detailTopStyles.midContainer}>
					<TouchableOpacity>
						<Text style={{ fontWeight: "bold" }}>Details</Text>
					</TouchableOpacity>
					<View style={detailTopStyles.mid}>
						<Ionicons name="ios-time-outline" size={20} />
						<Text style={{ fontWeight: "300" }}>15 mins</Text>
					</View>
				</View>
				<Text style={detailTopStyles.text}>
					Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
					ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
					Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
				</Text>
			</View>
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
