import React from "react";
import axios from "axios";
import { Home, DetailPage, CartPage } from "./pages";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import { API_KEY, APP_ID } from "@env";

export default function App() {
	const searchRecipes = async (query) => {
		try {
			const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`;
			const response = await axios.get(url);
			const data = response.data;

			console.log(data);
		} catch {
			console.error("This is an error");
		}

		// Do something with the recipe search results
	};
	// const fetchData = async () => {
	// 	try {
	// 		const response = await axios.get(`${url}/data`, {
	// 			headers: {
	// 				Authorization: `Bearer ${API_KEY}`,
	// 			},
	// 		});
	// 		console.log(response.data);
	// 	} catch (error) {
	// 		console.error(error);
	// 	}
	// };

	searchRecipes("omelette");
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Details" component={DetailPage} />
				<Stack.Screen name="CartPage" component={CartPage} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
