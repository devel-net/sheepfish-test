import {StyleSheet} from "react-native";
import colors from "./colors";

export const global = StyleSheet.create({
	text: {
		fontWeight: "normal",
		fontSize: 16,
	},
	container: {
		marginTop: 12,
		marginHorizontal: 12,
	},
	header: {
		paddingVertical: 12,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between"
	}
})
