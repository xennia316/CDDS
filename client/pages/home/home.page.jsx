import React from "react";
import { ScrollView, View } from "react-native";
import {
	FilterOptions,
	Footer,
	Header,
	PopularCarousel,
	DeliciousCarousel,
} from "../../components";

import styles from "./home";

const Home = () => {
	return (
		<View style={styles.container}>
			<Header />
			<FilterOptions />
			<PopularCarousel />
			<DeliciousCarousel />
			<Footer />
		</View>
	);
};
export default Home;
