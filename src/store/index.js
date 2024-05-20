import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import productsReducer from "./modules/productsList/reducer";
import cartReducer from "./modules/productCart/reducer";
import cartModalReducer from "./modules/productCartModal/reducer";
import loadingPageReducer from "./modules/loadingPage/reducer";

const reducers = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    cartModal: cartModalReducer,
    loadingPage: loadingPageReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export { store };
