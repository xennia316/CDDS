import React from "react";
import axios from "axios";
import { Home, DetailPage, CartPage } from "./pages";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
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
