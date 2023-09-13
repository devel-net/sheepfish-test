import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export const styles = StyleSheet.create({
	card: {
		backgroundColor: colors.white,
		borderRadius: 12,
		flex: 1,
		marginVertical: 12,
		paddingVertical: 12,
		paddingHorizontal: 12,
		alignItems: "center"
	},
	image: {
		width: '100%',
		height: 246,
		resizeMode: 'contain'
	},
	boldText: {
		fontWeight: "bold"
	}
})
