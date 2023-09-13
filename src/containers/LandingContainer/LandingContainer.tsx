import React, {useEffect} from 'react';
import {useAppDispatch, useAppNavigation, useAppSelector} from "../../store/hooks";
import {Animated, Text, View} from "react-native";
import {ProductType} from "../../store/modules/products/productsReduce.types";
import {getProducts, setProducts} from "../../store/modules/products/productsReduce";

import {styles} from "./LandingContainer.styles"

import FlatList = Animated.FlatList;
import {ProductCardView} from "../../components/ProductCard/ProductCardView";
import {global} from "../../styles/global";
import {StyledButton} from "../../components/StyledButton/StyledButton";

import AddIcon from '../../../assets/icons/manipulate/icon_add.svg'
import AsyncStorage from "@react-native-async-storage/async-storage";
const LandingContainer = () => {
	
	const dispatch = useAppDispatch();
	const navigation = useAppNavigation()
	const state = useAppSelector((state)=> state.products)
	
	async function checkIfExists(): Promise<boolean>{
		const result = await AsyncStorage.getItem('products');
		if (result != null) {
			dispatch(setProducts(JSON.parse(result)))
		}
		return !!result;
	}
	useEffect(() => {
		checkIfExists().then(isExists => {
			if(isExists) return
			dispatch(getProducts());
		});
	}, []);
	
	return (
		<View style={styles.container}>
			<View style={global.header}>
				<Text style={{...global.text, fontWeight: "bold"}}>Список товарів</Text>
				<StyledButton onPress={()=>navigation.navigate('addProduct')}>
					<AddIcon width={24} height={24}/>
				</StyledButton>
			</View>
			{state.products !== null &&
          <FlatList
              data={state.products}
              renderItem={({ item }: { item: ProductType }) => <ProductCardView item={item} />}
              columnWrapperStyle={{ gap: 10 }}
              numColumns={2}
              keyExtractor={(item) => item.id.toString()}
          />
			}
		</View>
	);
};

export default LandingContainer;
