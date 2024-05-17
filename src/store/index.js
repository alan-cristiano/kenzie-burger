import { createStore, combineReducers } from "redux";
import productsReducer from "./modules/products/reducer";
import searchProductReducer from "./modules/searchProduct/reducer";
import cartReducer from "./modules/cart/reducer";

const reducers = combineReducers({
    products: productsReducer,
    searchProduct: searchProductReducer,
    cart: cartReducer,
});

const store = createStore(reducers);

export { store };
