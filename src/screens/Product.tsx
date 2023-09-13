import React, {FunctionComponent} from 'react';
import {View, StyleSheet, Text, Image} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackCatalogParamList} from "../Navigation/Navigation.types";

import {global} from "../styles/global";
import colors from "../styles/colors";

import IconBack from '../../assets/icons/manipulate/icon_back.svg'
import {StyledButton} from "../components/StyledButton/StyledButton";
import {useAppNavigation} from "../store/hooks";

interface IProductScreenProps
	extends NativeStackScreenProps<RootStackCatalogParamList, "product"> {}
const Product: FunctionComponent<IProductScreenProps> = ({route}) => {
	const navigation = useAppNavigation()
	const product = route.params;
	return (
		<>
			<View style={global.container}>
				<View style={global.header}>
					<StyledButton onPress={()=> navigation.goBack()}>
						<IconBack width={24} height={24}/>
					</StyledButton>
				</View>
				<View style={styles.card}>
					{
						product.image &&
							<Image style={styles.image} source={{uri: product.image}}/>
					}
					<Text style={{...global.text, fontWeight:'bold', textAlign: "center"}}>{product.title}</Text>
					<Text style={{...global.text, fontSize: 12, color: colors.gray}}>{product.description}</Text>
					<Text style={{...global.text, fontSize: 24, color: colors.bluePrimary, textAlign:'right'}}>${product.price}</Text>
				</View>
			</View>
		</>
	);
};
const styles = StyleSheet.create({
 image: {
	 width: '100%',
	 height: 400,
	 resizeMode: "contain",
 },
 card: {
	 backgroundColor: colors.white,
	 paddingHorizontal: 24,
	 paddingVertical: 12,
	 borderRadius: 12,
	 gap: 24,
 }
})
export default Product;
