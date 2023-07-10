import React, { useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";

import styles from "./filterComponent.js";
import burger from "../../assets/images/burger.png";

const FilterOptions = () => {
	const [selectedItem, setSelectedItem] = useState(null);

	const data = [
		{ image: burger, title: "Title", id: 1 },
		{ image: burger, title: "Title", id: 2 },
		{ image: burger, title: "Title", id: 3 },
		{ image: burger, title: "Title", id: 4 },
		{ image: burger, title: "Title", id: 5 },
		{ image: burger, title: "Title", id: 6 },
		{ image: burger, title: "Title", id: 7 },
		{ image: burger, title: "Title", id: 8 },
		{ image: burger, title: "Title", id: 9 },
		{ image: burger, title: "Title", id: 10 },
	];
	const renderItem = ({ item }) => {
		const isSelected = selectedItem === item.id;
		const backgroundColor = isSelected ? "#262628" : "#F7F7F7";
		return (
			<TouchableOpacity onPress={() => setSelectedItem(item.id)}>
				<View style={styles.wrapper}>
					<Image style={backgroundColor} source={item.image} />
					<Text style={styles.text}>{item.title}</Text>
				</View>
			</TouchableOpacity>
		);
	};
	return (
		<FlatList
			horizontal
			data={data}
			keyExtractor={(item) => item.id}
			renderItem={renderItem}
			style={styles.container}
		/>
	);
};

export default FilterOptions;
