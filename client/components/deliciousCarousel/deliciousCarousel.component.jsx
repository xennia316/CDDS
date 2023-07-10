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
import data from "../static.js";

import styles from "./deliciousCarousel.js";
import fullstar from "../../assets/images/fullStar.png";

const DeliciousCarousel = () => {
	const renderItems = ({ item }) => {
		return (
			<TouchableHighlight>
				<ImageBackground source={item.image} style={[styles.card]}>
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
							<TouchableOpacity style={styles.bigButton}>
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
			<View style={styles.headingContainer}>
				<Text style={styles.heading}>Delicious items</Text>
				<Text style={styles.heading2}>see all</Text>
			</View>
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

export default DeliciousCarousel;
