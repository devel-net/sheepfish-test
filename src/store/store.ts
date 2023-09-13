import { configureStore } from "@reduxjs/toolkit";
import productsReduce from "./modules/products/productsReduce";

const store = configureStore({
	reducer: {
		products: productsReduce
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
