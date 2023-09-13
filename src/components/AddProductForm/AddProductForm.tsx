import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {ProductsType, ProductType} from "../../store/modules/products/productsReduce.types";

import AddIcon from '../../../assets/icons/manipulate/icon_add.svg'
import {global} from "../../styles/global";
import {useAppDispatch, useAppNavigation} from "../../store/hooks";
import {addProduct} from "../../store/modules/products/productsReduce";
import AsyncStorage from "@react-native-async-storage/async-storage";
type ProductFormType = Omit<ProductType, 'rating' | 'image' | 'category' | 'id'>;

const ProductFormSchema = Yup.object().shape({
	title: Yup.string().required('Title is required'),
	price: Yup.number().required('Price is required'),
	description: Yup.string().required('Description is required'),
});

const initialValues: ProductFormType = {
	title: '',
	price: 0,
	description: '',
};

const AddProductForm = () => {
	const dispatch = useAppDispatch();
	const navigation = useAppNavigation()
	async function getStorageData () {
		return await AsyncStorage.getItem('products')
	}
	const formik = useFormik({
		initialValues,
		validationSchema: ProductFormSchema,
		onSubmit: (values) => {
			getStorageData().then(async(data: any) => {
				const arrayData: ProductsType = JSON.parse(data);
				
				if(arrayData === null ) {
					const newProduct: ProductType = {
						id: 0,
						title: values.title,
						description: values.description,
						price: Number(values.price)
					}
					dispatch(addProduct(newProduct))
					await AsyncStorage.setItem('products', JSON.stringify([newProduct]))
					
				}else {
					const newProduct: ProductType = {
						id: arrayData.length + 1,
						title: values.title,
						description: values.description,
						price: Number(values.price)
					}
					arrayData.push(newProduct)
					dispatch(addProduct(newProduct))
					await AsyncStorage.setItem('products', JSON.stringify(arrayData))
				}
				navigation.replace('landing')
			})
		},
	});
	const handleButtonPress = () => {
		formik.handleSubmit();
	};
	return (
		<View style={{...global.container, gap: 24,}}>
			<TextInput
				placeholder="Title"
				onChangeText={formik.handleChange('title')}
				onBlur={formik.handleBlur('title')}
				value={formik.values.title}
			/>
			{formik.touched.title && formik.errors.title ? <Text>{formik.errors.title}</Text> : null}
			
			<TextInput
				placeholder="Price"
				keyboardType="numeric"
				onChangeText={formik.handleChange('price')}
				onBlur={formik.handleBlur('price')}
				value={formik.values.price.toString()}
			/>
			{formik.touched.price && formik.errors.price ? <Text>{formik.errors.price}</Text> : null}
			
			<TextInput
				placeholder="Description"
				multiline
				onChangeText={formik.handleChange('description')}
				onBlur={formik.handleBlur('description')}
				value={formik.values.description}
			/>
			{formik.touched.description && formik.errors.description ? (
				<Text>{formik.errors.description}</Text>
			) : null}
			<View style={{
				flexDirection: "row",
				alignItems: "center"
			}}>
				<TouchableOpacity onPress={handleButtonPress}>
					<AddIcon/>
				</TouchableOpacity>
			</View>
			
		</View>
	);
};

export default AddProductForm;
