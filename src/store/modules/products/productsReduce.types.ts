export type ProductType = {
	id: number | any;
	title: string;
	price: number;
	description: string;
	category?: string;
	image?: string;
	rating?: {
		rate: number;
		count: number;
	}
};
export type ProductsType = Array<ProductType>;

export type StateProductsStoreType = {
	products: ProductsType | null;
};
