import React from "react";
import {
	View,
	Text,
	ImageBackground,
	Image,
	TouchableOpacity,
	TouchableHighlight,
} from "react-native-web";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "./popularCard";

import fullstar from "../../assets/images/fullStar.png";

const PopularCard = ({ item }) => {
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
							<Ionicons style={styles.icon} size={18} name="ios-heart-sharp" />
						</TouchableOpacity>
					</View>
				</View>
			</ImageBackground>
		</TouchableHighlight>
	);
};

export default PopularCard;
