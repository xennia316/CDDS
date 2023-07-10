import { StyleSheet } from "react-native-web";
export default styles = StyleSheet.create({
	container: {
		height: "100%",
		width: "90%",
		position: "relative",
		backgroundColor: "#fff",
		alignSelf: "center",
		alignItems: "center",
		paddingVertical: 30,
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
		fontWeight: "400",
		fontSize: 14,
	},

	heading: {
		fontSize: 18,
		fontWeight: "400",
		alignSelf: "flex-start",
	},
});
