import { StyleSheet } from "react-native";
export default styles = StyleSheet.create({
	container: { width: "100%", height: "45%", flexDirection: "column", gap: 12 },
	carousel: { height: "100%", backgroundColor: "" },
	card: {
		height: "100%",
		width: 316,
		borderRadius: 40,
		marginHorizontal: 6,
		padding: 20,
	},
	image: {},
	heading: {
		fontSize: 18,
		fontWeight: "400",
	},
	inner: {
		width: "60%",
		height: "100%",
		flexDirection: "column",
		justifyContent: "space-between",
	},
	textName: {
		color: "white",
		fontSize: 24,
		fontWeight: "bold",
	},

	textPrice: {
		color: "white",
		fontSize: 24,
		fontWeight: "bold",
	},

	textRating: { color: "white" },

	img: {
		width: 18,
		height: 18,
	},
	imageContainer: {
		flexDirection: "row",
		gap: 8,
		alignContent: "center",
	},

	bigButton: {
		backgroundColor: "white",
		height: 38,
		width: "100%",
		borderRadius: 24,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},

	addText: {
		fontWeight: "500",
	},

	middle: {
		flexDirection: "column",
		justifyContent: "flex-end",
		height: "50%",
	},
	bottom: {
		flexDirection: "row",
		width: "100%",
		gap: 8,
	},
	message: {
		height: 38,
		width: 38,
		borderRadius: "50%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		opacity: 0.8,
	},
	blurView: {
		position: "absolute",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: "white",
		opacity: 0.6,
		borderRadius: "50%",
		borderWidth: 1,
		borderColor: "#E8E8EC",
	},
	like: {
		height: 38,
		width: 38,
		borderRadius: "50%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		opacity: 0.8,
	},

	icon: {
		color: "white",
	},
});
