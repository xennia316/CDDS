import React, { useState } from "react";
import {
	View,
	Text,
	FlatList,
	ImageBackground,
	Image,
	TouchableOpacity,
	TouchableHighlight,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import { PopularCard } from "../index.js";
import data from "../static.js";

import styles from "./popularCarousel.js";
import fullstar from "../../assets/images/fullStar.png";

const PopularCarousel = ({ navigation }) => {
	const [selectedItem, setSelectedItem] = useState(null);
	const renderItems = ({ item }) => {
		const isSelected = selectedItem === item.id;
		const backgroundColor = isSelected ? "#F7F7F7" : "#262628";
		return (
			<TouchableHighlight
				onPress={() =>
					selectedItem == item.id
						? setSelectedItem(null)
						: setSelectedItem(item.id)
				}
			>
				<ImageBackground
					source={item.image}
					style={[styles.card, { backgroundColor }]}
				>
					<View style={styles.inner}>
						<Text style={styles.textName}>{item.name}</Text>
						<View style={styles.middle}>
							<Text style={styles.textPrice}>{item.price}</Text>
							<View style={styles.imageContainer}>
								<Image style={styles.img} source={fullstar} />
								<Text style={styles.textRating}>{item.rating}</Text>
							</View>
						</View>
						<View style={styles.bottom}>
							<TouchableOpacity
								style={styles.bigButton}
								onPress={() => navigation.navigate("Details")}
							>
								<Text style={styles.addText}>Add to Cart</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.message}>
								<View style={styles.blurView} />
								<Ionicons
									size={18}
									style={styles.icon}
									name="ios-mail-open-outline"
								/>
							</TouchableOpacity>
							<TouchableOpacity style={styles.like}>
								<View style={styles.blurView} />
								<Ionicons
									style={styles.icon}
									size={18}
									name="ios-heart-sharp"
								/>
							</TouchableOpacity>
						</View>
					</View>
				</ImageBackground>
			</TouchableHighlight>
		);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.heading}>Popular items</Text>
			<View>
				<FlatList
					style={styles.carousel}
					horizontal
					data={data}
					renderItem={renderItems}
					showsHorizontalScrollIndicator={false}
				/>
			</View>
		</View>
	);
};

export default PopularCarousel;
