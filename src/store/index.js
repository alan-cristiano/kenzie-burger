import { createStore, combineReducers } from "redux";
import productsReducer from "./modules/productsList/reducer";
import searchProductReducer from "./modules/productSearch/reducer";
import cartReducer from "./modules/productCart/reducer";
import cartModalReducer from "./modules/productCartModal/reducer";
import loadingPageReducer from "./modules/loadingPage/reducer";

const reducers = combineReducers({
    products: productsReducer,
    searchProduct: searchProductReducer,
    cart: cartReducer,
    cartModal: cartModalReducer,
    loadingPage: loadingPageReducer,
});

const store = createStore(reducers);

export { store };
