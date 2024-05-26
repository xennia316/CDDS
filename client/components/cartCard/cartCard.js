import { StyleSheet } from "react-native";
export default styles = StyleSheet.create({
	container: {
		height: 140,
		borderRadius: 18,
		backgroundColor: "white",
		flexDirection: "row",
		alignItems: "center",
		gap: 12,
		width: "100%",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
		elevation: 3,
		marginVertical: 8,
		marginHorizontal: 0,
	},
	row: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		// width: "40%",
	},
	rowImage: {
		justifyContent: "center",
		alignItems: "center",
		width: "40%",
	},
	image: {
		width: "100%",
		height: "100%",
		resizeMode: "cover",
		borderRadius: 18,
		backgroundColor: "black",
	},
	textRow: {
		height: "100%",
		width: "30%",
		flexDirection: "column",
		justifyContent: "space-around",
		alignSelf: "center",
	},
	text: {},
	largeText: {
		fontSize: 16,
	},
	mediumText: {
		fontSize: 14,
	},
	smallText: {
		fontSize: 10,
		color: "grey",
	},
	number: {
		fontSize: 16,
	},
	button: {
		backgroundColor: "white",
		borderRadius: "50%",
		borderWidth: 1,
		borderColor: "grey",
		width: 18,
		height: 18,
		justifyContent: "start",
		alignItems: "center",
	},
	buttonText: {
		color: "black",
		fontSize: 12,
	},
	closeRow: {
		position: "absolute",
		bottom: 18,
		right: 20,
	},
	closeButton: {
		borderRadius: 10,
		width: 20,
		height: 20,
		justifyContent: "center",
		alignItems: "center",
	},
	closeButtonText: {
		color: "gray",
		fontSize: 18,
	},

	controls: {
		flexDirection: "row",
		width: "100%",
		justifyContent: "space-between",
	},
});
