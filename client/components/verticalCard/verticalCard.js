import { StyleSheet } from "react-native";
export default styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 16,
		paddingVertical: 8,
		borderRadius: 8,
		width: "100%",
		gap: 8,
		backgroundColor: "#fefefe",
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		gap: 6,
	},
	imageContainer: {
		width: 45,
		height: 45,
		backgroundColor: "#eee",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 16,
	},
	image: {
		width: 30,
		height: 30,
		borderRadius: 16,
	},
	text: {
		fontSize: 12,
		fontWeight: "200",
	},
	button: {
		backgroundColor: "#fff",
		borderRadius: "50%",
		borderColor: "grey",
		borderWidth: 1,
		width: 18,
		height: 18,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	buttonText: {
		fontSize: 12,
		fontWeight: "bold",
		color: "grey",
	},
	count: {
		fontSize: 14,
		marginHorizontal: 8,
	},

	inner: {
		width: "100%",
		height: 200,
		position: "relative",
		backgroundColor: "green",
	},
});
