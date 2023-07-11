import { StyleSheet } from "react-native";
export default styles = StyleSheet.create({
	top: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%",
		alignItems: "center",
	},
	container: {
		height: "100%",
		width: "100%",
		position: "relative",
		backgroundColor: "#fff",
		alignItems: "center",
		paddingHorizontal: 18,
		gap: 24,
	},
	button: {
		backgroundColor: "black",
		borderRadius: 50,
		paddingVertical: 15,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		position: "absolute",
		bottom: 0,
	},
	text: {
		color: "white",
		fontSize: 18,
	},
});
