import React from "react";
import { View } from "react-native";
import {
	FilterOptions,
	Footer,
	Header,
	PopularCarousel,
	DeliciousCarousel,
} from "../../components";

import styles from "./home";

const Home = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Header />
			<FilterOptions />
			<PopularCarousel navigation={navigation} />
			<DeliciousCarousel navigation={navigation} />
			<Footer navigation={navigation} />
		</View>
	);
};
export default Home;
