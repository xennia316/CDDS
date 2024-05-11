import React, { useState } from "react";
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
	const [data, setData] = useState({});
	return (
		<View style={styles.container}>
			<Header setData={setData} />
			<FilterOptions />
			<PopularCarousel navigation={navigation} />
			<DeliciousCarousel navigation={navigation} data={data} />
			<Footer navigation={navigation} />
		</View>
	);
};
export default Home;
