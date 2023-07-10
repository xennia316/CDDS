import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	headerContainer: {
		flexDirection: "row",
		gap: 12,
		width: "100%",
	},
	wrapper: {
		backgroundColor: "#fff",
		borderColor: "gray",
		borderRadius: 24,
		borderWidth: 1,
		width: "80%",
		flexDirection: "row",
		height: 40,
		justifyContent: "space-between",
		padding: 8,
	},
	textInput: {
		flex: 1,
		width: "50%",
		flexDirection: "row",
		alignSelf: "flex-end",
		borderLeftWidth: 1,
		borderLeftColor: "#E8E8EC",
		padding: 2,
		gap: 4,
	},
	textInputField: {
		// placeHolderTextColor: "black",
	},
	viewLeft: {
		flex: 1,
		width: "50%",
		alignSelf: "center",
		flexDirection: "row",
		alignItems: "center",
		gap: 4,
	},

	viewLeftText: {
		color: "#AAABB3",
	},

	filter: {
		backgroundColor: "#FF8C3E",
		width: 40,
		height: 40,
		borderRadius: "50%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
});

export default styles;
