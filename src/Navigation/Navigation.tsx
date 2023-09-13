import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator, type NativeStackNavigationOptions} from "@react-navigation/native-stack";

/// screens
import Landing from "../screens/Landing";

// constants
import { PATHS } from "./Navigation.conts";

// types
import { RootStackCatalogParamList } from "./Navigation.types"
import Product from "../screens/Product";
import AddProduct from "../screens/AddProduct";

const Stack = createNativeStackNavigator<RootStackCatalogParamList>();
const options = {
  headerShown: false
} as NativeStackNavigationOptions;
function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={options}>
        <Stack.Screen
          name={PATHS.landing}
          component={Landing}
        />
        <Stack.Screen
          name={PATHS.product}
          component={Product}
        />
        <Stack.Screen
          name={PATHS.addProduct}
          component={AddProduct}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
