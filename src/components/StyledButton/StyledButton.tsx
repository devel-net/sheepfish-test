import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

interface Props {
	children: React.ReactNode;
	color?: string;
	onPress?: () => void;
}
export const StyledButton = ({ children, color, onPress }: Props) => {
	return (
		<TouchableOpacity
			onPress={onPress && onPress}
			style={[
				styles.button,
				{
					backgroundColor: color ? color : "rgba(8, 103, 152, 0.30)",
				},
			]}
		>
			{children}
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: "rgba(8, 103, 152, 0.30)",
		padding: 8,
		borderRadius: 6,
	},
});
