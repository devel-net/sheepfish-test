import { PATHS } from "./Navigation.conts"
import {ProductType} from "../store/modules/products/productsReduce.types";

export type RootStackCatalogParamList = {
  
  [PATHS.landing]: undefined;
  [PATHS.product]: ProductType;
  [PATHS.addProduct]: undefined;
};
