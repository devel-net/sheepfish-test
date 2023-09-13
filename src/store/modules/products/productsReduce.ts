import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios, {AxiosResponse} from "axios";
import {ProductsType, ProductType, StateProductsStoreType} from "./productsReduce.types";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getProducts = createAsyncThunk<ProductsType>(
	"products/getProducts",
	async (_data, { rejectWithValue }) => {
		try {
			const response: AxiosResponse<
				Array<ProductType>
			>= await axios.get(
				"https://fakestoreapi.com/products",
			);
			return response.data.map((product: ProductType) =>
				product
			);
		}
	catch (err: any) {
			if (err.response !== null && err.response !== undefined) {
				return rejectWithValue(err.response.data);
			} else {
				return rejectWithValue(err.message);
			}
		}
	}
);

const productsSlice = createSlice({
	name: "products",
	initialState: {
		products: null,
	} as StateProductsStoreType,
	reducers: {
		addProduct: (state, action: PayloadAction<ProductType>) => {
			if(state.products === null) {
				state.products = [];
			}
			const newProduct = action.payload;
			
			if (newProduct.id === undefined) {
				const maxId = Math.max(...state.products.map((product) => product.id), 0);
				newProduct.id = maxId + 1;
			}
			
			state.products.push(newProduct);
			
		},
		setProducts: (state, action: PayloadAction<ProductsType>) => {
			state.products = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder.addCase(getProducts.fulfilled, (state, action) => {
			state.products = action.payload;
		});
		builder.addCase(getProducts.rejected, (_state, action) => {
			console.error(
				"Помилка отримання даних getProducts:",
				action.error.message
			);
		});
	},
});

export const { addProduct, setProducts } = productsSlice.actions;
export default productsSlice.reducer;
