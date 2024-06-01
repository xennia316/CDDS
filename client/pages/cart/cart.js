import { StyleSheet } from "react-native";
export default styles = StyleSheet.create({
	top: {
		width: "100%",
		paddingVertical: 0,
		marginVertical: 0,
	},
	container: {
		height: "100%",
		width: "100%",
		backgroundColor: "#fff",
		alignItems: "center",
		paddingHorizontal: 18,
	},
	button: {
		backgroundColor: "black",
		borderRadius: 50,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		position: "absolute",
		bottom: 20,
		height: 48,
	},
	text: {
		color: "white",
		fontSize: 18,
	},
	emptyList: {
		height: 500,
		width: "100%",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
	textEmpty: {
		fontWeight: "400",
		color: "grey",
		textAlign: "center",
		fontSize: 36,
	},
});
