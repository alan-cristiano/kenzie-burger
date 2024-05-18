import { createStore, combineReducers } from "redux";
import productsReducer from "./modules/productsList/reducer";
import searchProductReducer from "./modules/productSearch/reducer";
import cartReducer from "./modules/productCart/reducer";
import cartModalReducer from "./modules/productCartModal/reducer";

const reducers = combineReducers({
    products: productsReducer,
    searchProduct: searchProductReducer,
    cart: cartReducer,
    cartModal: cartModalReducer,
});

const store = createStore(reducers);

export { store };
