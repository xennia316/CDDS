import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
	container: {
		width: "100%",
		flexDirection: "column",
		gap: 18,
		paddingVertical: 18,
	},
	top: {
		flexDirection: "row",
		width: "100%",
		// height: "100%",
		justifyContent: "space-between",
	},

	heading: {
		fontSize: 24,
		fontWeight: "400",
	},

	mid: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		gap: 4,
	},

	midContainer: {
		flexDirection: "row",
		width: "100%",
		justifyContent: "space-between",
		paddingVertical: 12,
	},

	img: { width: 20, height: 20 },

	largeImg: {
		width: "100%",
		height: 300,
		backgroundColor: "black",
		borderRadius: 32,
	},
	text: {
		color: "grey",
		fontSize: 14,
		marginTop: -10,
	},
});
