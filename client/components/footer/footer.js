import { StyleSheet } from "react-native-web";

export default styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "white",
		height: 70,
		width: "95%",
		borderRadius: 50,
		position: "absolute",
		bottom: 2,
	},
	footer: {
		flexDirection: "row",
		height: 60,
		width: "98%",
		padding: 8,
		backgroundColor: "#eee",
		opacity: 0.85,
		borderRadius: 50,
	},
	footerItem: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		elevation: 5,
		marginHorizontal: 8,
	},
});
