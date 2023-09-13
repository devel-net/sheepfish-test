import { ProductType } from "../../store/modules/products/productsReduce.types";
import React, { FunctionComponent } from "react";
import {Text, View, Image, TouchableOpacity} from "react-native";

import { styles } from "./ProductCardView.styles";
import {useAppNavigation} from "../../store/hooks";

type ProductCardViewProps = {
	item: ProductType;
};

export const ProductCardView: FunctionComponent<ProductCardViewProps> = ({ item }) => {
	const truncatedTitle = item.title.length > 16 ? item.title.slice(0, 16) + "..." : item.title;
	const navigation = useAppNavigation()
	return (
		<TouchableOpacity
			style={styles.card}
			onPress={()=> navigation.navigate("product", item)}
		>
			{
				item.image &&
					<Image style={styles.image} source={{ uri: item.image }} />
			}
			<Text style={styles.boldText}>{truncatedTitle}</Text>
			<Text>${item.price}</Text>
		</TouchableOpacity>
	);
};
